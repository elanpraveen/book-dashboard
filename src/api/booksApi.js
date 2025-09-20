import axios from "axios";

const API_BASE =
  import.meta.env.VITE_API_BASE ||
  "https://crudcrud.com/api/64e62e7c787e41f1a78d1698c3294c0e/books";

export const fetchAllBooks = async () => {
  const res = await axios.get(API_BASE);
  return res.data;
};

export const createBook = async (book) => {
  const res = await axios.post(API_BASE, book);
  return res.data;
};

export const updateBook = async (id, book) => {
  const { _id, ...payload } = book;
  const res = await axios.put(`${API_BASE}/${id}`, payload);
  return res.data;
};

export const deleteBook = async (id) => {
  const res = await axios.delete(`${API_BASE}/${id}`);
  return res.data;
};
