// book-list.component.ts
import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  deleteBook(index: number): void {
    this.bookService.deleteBook(index);
  }

  editBook(index: number): void {
    this.router.navigate(['/edit', index]);
  }
}

