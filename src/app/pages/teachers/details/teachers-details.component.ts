import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers-details',
  templateUrl: './teachers-details.component.html',
  styleUrls: ['./teachers-details.component.css']
})
export class TeachersDetailsComponent implements OnInit {

  isEditing: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
