import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book: Book | undefined;
  id!: number;

  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.book = this.bookService.getBook(this.id);
  }

  updateBook(): void {
    if (this.book) {
      this.bookService.updateBook(this.id, this.book);
      this.router.navigate(['/']);
    }
    this.router.navigate(['/']);
  }
}
