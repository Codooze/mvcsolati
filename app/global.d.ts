import type { Database as DB } from "@/lib/database.types";

declare global {
  type Database = DB;
  type Book = DB["public"]["Tables"]["books"]["Row"];
  type BookId = Book["id"];
  type NewBook = Omit<Book, "id">;
}
