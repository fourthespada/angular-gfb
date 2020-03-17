import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit() {
  }

}