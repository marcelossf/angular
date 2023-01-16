import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() public title: string = "Bem-vindo!";

  constructor(){}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
      // alert("Alteração feita com sucesso!")
  }
}
