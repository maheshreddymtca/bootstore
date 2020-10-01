import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-alerts',
  templateUrl: './book-alerts.component.html',
  styleUrls: ['./book-alerts.component.css']
})
export class BookAlertsComponent implements OnInit {

  @Input() bookinput;
  @Output() share = new EventEmitter;
  @Output() notify = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

}
