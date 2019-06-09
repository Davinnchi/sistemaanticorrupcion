var express = require('express');
var router = express.Router();
const request = require('request');

router.use(express.static('public'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/datos', function(req, res, next) {
  const {valor, clave} = req.body;
  //console.log("Informacion de oscar");
  request('https://www.datos.gov.co/resource/nuxh-53y2.json?'+clave+'='+valor, { json: true }, (err,result) => {
  //console.log(result);
  console.log(result.body);
  if (result.body[0] == null) {
    mensaje ="No se encontraron resultados";
    console.log(mensaje);
    res.render('datos0',{ valor1:valor, clave1:clave, alerta:mensaje});
  }
  else{
    datos=result.body[0];
    mensaje="Datos Encontrados";
    console.log(mensaje);
    datos = result.body;
    res.render('datos1',{ valor1:valor, clave1:clave, alerta:mensaje, informacion:datos});
    
  }    
  });
});

module.exports = router;