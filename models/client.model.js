const getAll = ()=>{
    debug.query('select * from clientes');
}

module.exports = {
    getAll
}