var express = require('express');
const { getAll } = require('../../models/client.model');
var router = express.Router();

router.get('/', async (req,res)=>{
    // recupera todos los clientes
    // result es un array
    // tiene 2 posiciones
try {
    const result = await getAll;
    res.json(result[0]);
} catch(error) {
    res.json({fatal:error.message})
}
   
});




module.exports = router;