import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit{

  // se declara una variable que se llama segundo de tipo numerica que es publica y se inicializa en 0
  // esta representa los segundos transcurridos en el cronometro
  public segundo : number = 0;
  // se declara una entrada publica se llama inicio de tipo numerica y se inicializa en 0
  // esta representa el valor inicial del cronometro en segundos.
  @Input() public inicio : number = 0;
  // se declara una salida publica que se llama multiplo10 que es una instancia de EventEmitter 
  // se usa para enviar un evento cuando el cronometro alcance un multiplo de 10 seg.
  @Output() public multiplo10 = new EventEmitter();

  // En este metodo, se inicializa la variable segundo con el valor de inicio
  ngOnInit(): void{
    this.segundo = this.inicio;
      // se llama al mmtodo setInterval para que se ejecute el método actualizarSegundo() cada segundo
    setInterval(this.actualizarSegundo.bind(this), 1000);
  }

  // en este metodo se ejecuta cada segundo y aumenta la variable de segundo en uno
  private actualizarSegundo(): void{
    this.segundo++;
    // Si el valor de segundo es un múltiplo de 10 
    if (this.segundo % 10 === 0) {
        //se emite un evento utilizando el método emititMultiplo10()
      this.emititMultiplo10();
    }
  }
  // este metodo emite un evento utilizando la salida multiplo10
  private emititMultiplo10(): void{
    //se emite el valor actual del segundo
    this.multiplo10.emit(this.segundo);
  }

}
