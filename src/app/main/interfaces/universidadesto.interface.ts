export interface IUniversidadTO{
  _id : String;
  nombreUniversidad: String,
  email: String
}

export class UniversidadTO implements IUniversidadTO{
  public _id = "";
  public nombreUniversidad = "";
  public email = "";
}
