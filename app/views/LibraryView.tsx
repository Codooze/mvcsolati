"use client";

import { useState, useEffect } from "react";
import * as LibraryController from "../controllers/libraryController";

function LibraryView() {
  const [books, setBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState<NewBook>({
    book: "",
    author: "",
    stars: 0,
  });

  useEffect(() => {
    async function fetchBooks() {
      const books = await LibraryController.getLibrary();
      setBooks(books);
    }

    fetchBooks();
  }, []);

  const handleEdit = (id: BookId, field: any, value: any) => {
    setBooks(
      books.map((book) => (book.id === id ? { ...book, [field]: value } : book))
    );
  };

  const handleUpdate = async (id: BookId) => {
    const bookToUpdate = books.find((book) => book.id === id);

    await LibraryController.editBook(bookToUpdate!);
  };

  const handleDelete = async (id: BookId) => {
    await LibraryController.deleteBook(id);
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleAddBook = async () => {
    LibraryController.createBook(newBook);
    const books = await LibraryController.getLibrary();

    setBooks(books);
    setNewBook({ book: "", author: "", stars: 0 });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Book</th>
          <th>Author</th>
          <th>Stars</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(books) &&
          books.map((book) => (
            <tr key={book.id}>
              <td>
                <input
                  style={{ textAlign: "center" }}
                  value={book.book}
                  onChange={(e) => handleEdit(book.id, "book", e.target.value)}
                />
              </td>
              <td>
                <input
                  style={{ textAlign: "center" }}
                  value={book.author}
                  onChange={(e) =>
                    handleEdit(book.id, "author", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  style={{ textAlign: "center" }}
                  value={book.stars!}
                  type="number"
                  onChange={(e) => handleEdit(book.id, "stars", e.target.value)}
                />
              </td>
              <td>
                <button
                  className="bg-blue-800 text-white mr-1 px-4 rounded;"
                  onClick={() => handleUpdate(book.id)}
                >
                  Update
                </button>
                <button
                  className="bg-blue-800 text-white px-4 rounded;"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        <tr>
          <td>
            <input
              style={{ textAlign: "center", backgroundColor: "lightgray" }}
              value={newBook.book}
              onChange={(e) => setNewBook({ ...newBook, book: e.target.value })}
            />
          </td>
          <td>
            <input
              style={{ textAlign: "center", backgroundColor: "lightgray" }}
              value={newBook.author}
              onChange={(e) =>
                setNewBook({ ...newBook, author: e.target.value })
              }
            />
          </td>
          <td>
            <input
              style={{ textAlign: "center", backgroundColor: "lightgray" }}
              value={newBook.stars!}
              type="number"
              onChange={(e) =>
                setNewBook({ ...newBook, stars: Number(e.target.value) })
              }
            />
          </td>
          <td>
            <button onClick={handleAddBook}>Add Book</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default LibraryView;
