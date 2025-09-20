import React, { useState } from "react";
import { Button, CircularProgress, Snackbar, Alert } from "@mui/material";
import { useBooks } from "../hooks/useBooks";
import BooksTable from "../components/BooksTable";
import BookForm from "../components/BookForm";
import ConfirmDialog from "../components/ConfirmDialog";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import PaginationControls from "../components/PaginationControls";

export default function Dashboard() {
  const { books, isLoading, isError, addBook, editBook, removeBook } =
    useBooks();

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);

  const [openForm, setOpenForm] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [confirmDialog, setConfirmDialog] = useState(null);
  const [toast, setToast] = useState(null);

  const filteredBooks = books
    .filter((b) =>
      [b.title, b.author].some((field) =>
        field.toLowerCase().includes(search.toLowerCase())
      )
    )
    .filter((b) => (genre ? b.genre === genre : true))
    .filter((b) => (status ? b.status === status : true));

  const perPage = 10;
  const totalPages = Math.ceil(filteredBooks.length / perPage) || 1;
  const paginated = filteredBooks.slice((page - 1) * perPage, page * perPage);

  const handleAdd = () => {
    setEditingBook(null);
    setOpenForm(true);
  };

  const handleEdit = (book) => {
    setEditingBook(book);
    setOpenForm(true);
  };

  const handleDelete = (book) => {
    setConfirmDialog({
      message: `Are you sure you want to delete \"${book.title}\"?`,
      onConfirm: async () => {
        await removeBook.mutateAsync(book._id);
        setToast({ type: "success", msg: "Book deleted" });
      },
    });
  };

  const handleSubmitForm = async (data) => {
    try {
      if (editingBook) {
        await editBook.mutateAsync({ id: editingBook._id, book: data });
        setToast({ type: "success", msg: "Book updated" });
      } else {
        await addBook.mutateAsync(data);
        setToast({ type: "success", msg: "Book added" });
      }
    } catch {
      setToast({ type: "error", msg: "Operation failed" });
    }
  };

  if (isLoading) return <CircularProgress />;
  if (isError) return <Alert severity="error">Failed to fetch books</Alert>;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SearchBar value={search} onChange={setSearch} />
        <Button variant="contained" onClick={handleAdd}>
          + Add Book
        </Button>
      </div>

      <Filters
        genre={genre}
        status={status}
        onFilterChange={(field, value) =>
          field === "genre" ? setGenre(value) : setStatus(value)
        }
      />

      <BooksTable books={paginated} onEdit={handleEdit} onDelete={handleDelete} />

      <PaginationControls
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />

      <BookForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmitForm}
        initialData={editingBook}
      />

      <ConfirmDialog
        open={!!confirmDialog}
        onClose={() => setConfirmDialog(null)}
        onConfirm={() => {
          confirmDialog.onConfirm();
          setConfirmDialog(null);
        }}
        message={confirmDialog?.message}
      />

      <Snackbar
        open={!!toast}
        autoHideDuration={3000}
        onClose={() => setToast(null)}
      >
        {toast && <Alert severity={toast.type}>{toast.msg}</Alert>}
      </Snackbar>
    </div>
  );
}
