const express = require('express')
const app = express()
const puerto = 8080

const productos = require('./routes/productos')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/', express.static(__dirname + '/public') )
app.use('/api/productos', productos)


app.listen(puerto, (error) => {
    if(error){
        console.log(`Se produjo un error en el servidor`)
        console.error(error)
    }else{
        console.log(`Servidor iniciado en el puerto ${puerto}`)
    }
})