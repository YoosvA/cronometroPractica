import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//se exporta la clase del componente padre para ser utilizada en otros modulos
export class AppComponent {
  //se declara una variable publica de tipo string que se inicializa como cadena vacia
  public mensaje : string = '';
  //se declara un metodo publico que obtiene un parametro llamado tiempo de tipo numerico y no devuelve nada
  public actualizar(tiempo: number) : void{
    //se le asigna a mensaje el valor de tiempo mas la concatenacion de una cadena que indica que la actualización ocurre cada 10 segundos.
    this.mensaje = tiempo + '(se actualiza cada 10 segundos)';
  }
}
