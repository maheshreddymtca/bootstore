import { CartService } from './../cart.service';
import { ActivatedRoute } from '@angular/router';
import { BOOKS } from './../books';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }
    addToCart(book: any) {
      // window.alert('Your product has been added to the cart!');
      this.cartService.addToCart(book);
    }

  ngOnInit() {
    this.route.paramMap.subscribe(parms4 => {
      this.book = BOOKS[+parms4.get('bookId')];
    });
  }

}
