import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jurosc',
  templateUrl: './jurosc.component.html',
  styleUrls: ['./jurosc.component.css']
})
export class JuroscComponent implements OnInit {
  vp: number;
  j: number;
  n: number;
  constructor() { 
    this.vp = 100;
    this.j = 2.5;
    this.n = 3;
  }

  ngOnInit() {
  }
  getJuros(){
  
  for(var i = 0; i => this.n; i++ ) {
    return this.vp * (1 + this.j/100) ** this.n
    }
  }


}