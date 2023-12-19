import * as libraryModel from "../models/libraryModel";
//aqui se es donde yo haría logica adicional sobre los datos que me regresa el modelo, formateo, etc  (funciona como puente entre el modelo y la vista)
export function getLibrary() {
  return libraryModel.getBooks();
}

export function editBook(data: Book) {
  return libraryModel.editBook(data);
}

export function deleteBook(id: BookId) {
  return libraryModel.deleteBook(id);
}

export function createBook(data: NewBook) {
  return libraryModel.createBook(data);
}
