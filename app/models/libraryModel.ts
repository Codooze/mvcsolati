"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function getBooks() {
  const supabase = createServerActionClient({ cookies });
  const { data, error } = await supabase.from("books").select("*");
  if (error) throw error;
  return data;
}

export async function editBook(data) {
  const supabase = createServerActionClient({ cookies });
  const { error } = await supabase.from("books").update(data).eq("id", data.id);
  if (error) throw error;
}

export async function deleteBook(id) {
  const supabase = createServerActionClient({ cookies });
  const { error } = await supabase.from("books").delete().match({ id });
  if (error) throw error;
}

export async function createBook(data) {
  const supabase = createServerActionClient({ cookies });
  const { error } = await supabase.from("books").insert([data]);
  if (error) throw error;
}
