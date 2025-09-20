import React from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";

export default function BookForm({ open, onClose, onSubmit, initialData }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      title: "",
      author: "",
      genre: "",
      year: "",
      status: "Available",
    },
  });

  React.useEffect(() => {
    reset(initialData || {
      title: "",
      author: "",
      genre: "",
      year: "",
      status: "Available",
    });
  }, [initialData, reset]);

  const submitHandler = (data) => {
    onSubmit(data);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{initialData ? "Edit Book" : "Add Book"}</DialogTitle>
      <DialogContent>
        <form id="book-form" onSubmit={handleSubmit(submitHandler)}>
          <TextField
            margin="dense"
            label="Title"
            fullWidth
            {...register("title", { required: "Title is required" })}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
          <TextField
            margin="dense"
            label="Author"
            fullWidth
            {...register("author", { required: "Author is required" })}
            error={!!errors.author}
            helperText={errors.author?.message}
          />
          <TextField
            margin="dense"
            label="Genre"
            fullWidth
            {...register("genre", { required: "Genre is required" })}
            error={!!errors.genre}
            helperText={errors.genre?.message}
          />
          <TextField
            margin="dense"
            label="Published Year"
            type="number"
            fullWidth
            {...register("year", { required: "Year is required" })}
            error={!!errors.year}
            helperText={errors.year?.message}
          />
          <TextField
            margin="dense"
            label="Status"
            select
            fullWidth
            {...register("status")}
          >
            <MenuItem value="Available">Available</MenuItem>
            <MenuItem value="Issued">Issued</MenuItem>
          </TextField>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit" form="book-form" variant="contained">
          {initialData ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
