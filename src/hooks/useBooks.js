import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchAllBooks,
  createBook,
  updateBook,
  deleteBook,
}from "../api/booksApi";

export function useBooks() {
  const queryClient = useQueryClient();

  const {
    data: books = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["books"],
    queryFn: fetchAllBooks,
  });

  const addBook = useMutation({
    mutationFn: createBook,
    onSuccess: () => queryClient.invalidateQueries(["books"]),
  });

  const editBook = useMutation({
    mutationFn: ({ id, book }) => updateBook(id, book),
    onSuccess: () => queryClient.invalidateQueries(["books"]),
  });

  const removeBook = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => queryClient.invalidateQueries(["books"]),
  });

  return {
    books,
    isLoading,
    isError,
    addBook,
    editBook,
    removeBook,
  };
}
