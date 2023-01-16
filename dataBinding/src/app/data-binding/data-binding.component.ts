import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url: string = 'http://loiane.com'
  cursoAngular: boolean = true;
  urlImage: string = 'http://lorempixel.com.br/500/400/?1'

  getValor(){
    return 1
  }

  getCurtirCurso(){
    return true;
  }

  public position: {x: number, y: number} = { x: 0, y:0 };

  constructor() {

  }

  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
    console.log(valor)
    console.log(this.position.x);
    console.log(this.position.y);
  }

  ngOnInit() {

  }
}
