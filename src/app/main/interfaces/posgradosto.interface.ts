import { newArray } from "@angular/compiler/src/util";

export class UniversidadTO {
 idUniversidad: String = "";
 nombreUniversidad: String = "";
}

export class MateriasTO {
  nombreMateria: String = "";
  intensidadHoraria: String = "";
  descripcion: String = "";
 }

export interface IPosgradoTO{
  _id : String;
  nombrePosgrado: String;
    universidad: Array<UniversidadTO>;
    materias: Array<MateriasTO>;
}

export class PosgradoTO implements IPosgradoTO{
  public _id = "";
  public nombrePosgrado = '';
  public universidad = new Array<UniversidadTO>();
  public materias = new Array<MateriasTO>();

}
