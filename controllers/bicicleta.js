const { insertData, allBicis, findById, removeById} = require("../db");

exports.list = function (re, res) {
  allBicis().then(resolve => {
    res.render("bicicletas/index", {bicis: resolve})
  })
};
exports.show = function (req, res) {
  allBicis().then(bicis => {
    let b = bicis.find((x) => x.id == req.params.id)
    res.render("bicicletas/show", {b});
  });
};
exports.create_get = function (req, res) {
  res.render("bicicletas/create");
};
exports.create_post = function (req, res) {
  var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
  bici.ubicacion = [req.body.lat, req.body.lng];
  insertData(bici).then(() => res.redirect("/bicicletas"));
};
exports.delete = function (req, res) {
  removeById(req.body.id).then(() => res.redirect("/bicicletas"));
};
exports.update_get = function (req, res) {
  allBicis(req.params.id).then(bicis => {
    let b = bicis.find((x) => x.id == req.params.id)
    res.render("bicicletas/update", {b});
  })
};
exports.update_post = function (req, res) { 
  var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
  bici.ubicacion = [req.body.lat, req.body.lng];
  update(req.body.id, bici).then(() => res.redirect("/bicicletas"));
};