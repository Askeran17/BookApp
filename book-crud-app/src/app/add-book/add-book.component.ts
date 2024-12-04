import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  book: Book = { title: '', author: '', publishDate: '' };

  constructor(private bookService: BookService, private router: Router) { }

  addBook(): void {
    this.bookService.addBook(this.book);
    this.router.navigate(['/']);
  }
}
