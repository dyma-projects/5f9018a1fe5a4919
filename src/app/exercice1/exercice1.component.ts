import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  title: String;
  userName: String;
  isLogged: Boolean;

  constructor() {
    this.title = 'PROJET';
    this.userName = '';
    this.isLogged = false;
  }

  login(): void {
    this.isLogged = !this.isLogged;
  }

  name(currentName: string) {
    this.userName = currentName;
  }
  ngOnInit(): void {
  }
}
