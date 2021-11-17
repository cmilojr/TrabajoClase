const db = require('../db')

let Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
  };
  Bicicleta.prototype.toString = function () {
    return `id: ${this.id} | color: ${this.color}`;
  };

  const allBicis = async() => await db.allBicis()

  Bicicleta.findById = function (aBiciId) {
    var aBici = Bicicleta.allBicis.find((x) => x.id == aBiciId);
    if (aBici) return aBici;
    else throw new Error(`No existe una Bicicleta con el id: ${aBiciId}`);
  };
  Bicicleta.update = function (aBiciId, newBici) {
    let id = Bicicleta.allBicis.findIndex(bici => bici.id === aBiciId)
    if (id) Bicicleta.allBicis[id] = newBici;
    else throw new Error(`No existe una Bicicleta con el id: ${aBiciId}`);
  };
  Bicicleta.removeById = function (aBiciId) {
    var aBici = Bicicleta.findById(aBiciId);
    for (let i = 0; i < Bicicleta.allBicis.length; i++) {
      if (Bicicleta.allBicis[i].id == aBiciId) {
        Bicicleta.allBicis.splice(i, 1);
        break;
      }
    }
  };
  
  module.exports = {
    Bicicleta,
    allBicis,
  };