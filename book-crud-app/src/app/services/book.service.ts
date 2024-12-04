import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [];

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  getBook(id: number): Book {
    return this.books[id];
  }

  updateBook(id: number, book: Book): void {
    this.books[id] = book;
  }

  deleteBook(id: number): void {
    this.books.splice(id, 1);
  }
}
