import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

/*
 * DoCheck,
 * AfterContentInit,
 * AfterContentChecked,
 * AfterViewInit,
 * AfterViewChecked
 */

@Component({
  selector: 'app-root',
  template: `
      <!-- <app-title title="Olá Mundo"></app-title> -->
      {{ valor }}
      <button (click)="adicionar()">Adicionar</button>
      <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  public valor: number = 1;

  constructor(){

  }

  public adicionar(): number {
    return this.valor += 1;
  }

  ngOnInit(): void{
    
    setTimeout(() => {
      console.log(1)
    }, 5000)

  }

  ngDoCheck(): void {
      console.log("ngDoCheck")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")   
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked") 
  }
  
}
