exports.Billete = function(vuelo,persona){
  this.persona=persona;
  this.vuelo = vuelo;

  this.inserta_db = inserta_db;

}

function inserta_db(db,tabla){
  if(!db){
    throw new Error("Hay que indicar una Base de datos en la llamada a inserta_db");
  }
  var stmt = db.prepare("INSERT INTO " + tabla + " VALUES (?,?)");
  stmt.run(this.vuelo.ID,this.persona);
  stmt.finalize();
}
