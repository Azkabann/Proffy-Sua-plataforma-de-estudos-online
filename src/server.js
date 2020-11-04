

//select the object server 
const express =  require('express')

//run the object server 
const server = express()

const { pageLanding, pageStudy, pageGiveClasses,saveclasses} = require('./pages.js')

//nunjucks
const nunjucks =  require('nunjucks')
//configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
}) 

// "use" é uma configuração do servidor
 server
//receber os dados do req.body
.use(express.urlencoded({extended:true}))
//configurar arquivos estáticos 
.use(express.static("public"))
//rotas de aplicação; os botões!
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)
