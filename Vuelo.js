exports.Vuelo = function(origen,destino,dia,hora){
  this.origen = origen;
  this.destino = destino;
  this.dia = dia;
  this.hora = hora;
  this.billetes = new Object;
  this.ID = this.origen + this.destino + this.dia + this.hora;

  this.nuevoBillete = nuevoBillete;
  this.all_billetes = all_billetes;
  this.inserta_db= inserta_db;
}


function all_billetes(){
  return this.billetes;
}

function nuevoBillete(billete){
  var datos = billete.origen + billete.destino + billete.dia+ billete.hora;
  if(!this.billetes[dato]){ //si es el primer billete que se vende
    this.billetes[dato]=[];
  }
  this.billetes[datos].push(billete);
  }


function inserta_db(db,tabla){
  if(!db)
    throw new Error("Hace falta indicar una base de datos");

  var stmt = db.prepare("INSERT INTO " + tabla + " VALUES (?,?,?,?,?)");
  stmt.run(this.ID, this.origen,this.destino,this.dia,this.hora);
  stmt.finalize();
}
