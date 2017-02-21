import { subscribeToRenderElement } from '@angular/core/src/linker/view_utils';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
public members = [
  {
    name: "Stephania",
    surname: "Bontsi",
    age: 25 
  },
  {
    name: "Wesley",
    surname: "Van Rooyen",
    age: 20
  },
  {
    name: "Tanisha",
    surname: "George",
    age: 16
  }
]
  constructor() { }

  ngOnInit() {
  }

}
