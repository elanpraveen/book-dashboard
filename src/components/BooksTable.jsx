import React from "react";
import { Button } from "@mui/material";

export default function BooksTable({ books, onEdit, onDelete }) {
  return (
    <table className="table card">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Year</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.length > 0 ? (
          books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.year}</td>
              <td>{book.status}</td>
              <td className="actions">
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => onEdit(book)}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={() => onDelete(book)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6} style={{ textAlign: "center" }}>
              No books found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
