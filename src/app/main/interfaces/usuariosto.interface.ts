export class PosgradosDeInteresTO{
  idPosgrado: String = "";
  nombrePosgrado: String = "";
}
export interface IUsuarioTO{
  _id : String;
  nombreUsuario: String,
  numeroContacto: String,
  email: String,
  posgradosDeInteres: Array<PosgradosDeInteresTO>;
}

export class UsuarioTO implements IUsuarioTO{
  public _id = "";
  public nombreUsuario = "";
  public numeroContacto = "";
  public email = "";
  public posgradosDeInteres = new Array<PosgradosDeInteresTO>();
}
