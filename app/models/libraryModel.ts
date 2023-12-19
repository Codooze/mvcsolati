"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function getBooks() {
  const supabase = createServerActionClient<Database>({ cookies });
  const { data, error } = await supabase.from("books").select("*");
  if (error) throw error;
  return data;
}

export async function editBook(data: Book) {
  const supabase = createServerActionClient<Database>({ cookies });
  const { error } = await supabase.from("books").update(data).eq("id", data.id);
  if (error) throw error;
}

export async function deleteBook(id: BookId) {
  const supabase = createServerActionClient<Database>({ cookies });
  const { error } = await supabase.from("books").delete().match({ id });
  if (error) throw error;
}

export async function createBook(data: NewBook) {
  const supabase = createServerActionClient<Database>({ cookies });
  const { error } = await supabase.from("books").insert([data]);
  if (error) throw error;
}
