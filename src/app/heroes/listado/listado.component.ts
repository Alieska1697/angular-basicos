import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Goku','Hulk'];
  heroeBorrado:string='';


    borrarHeroes() {
      this.heroeBorrado = this.heroes.shift() || '';
      

    }

}
