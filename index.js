// Primeiro precisamos criar o app usando o express
const express = require("express")
const app = express()

// Permite aceitar JSON na requisição
app.use(express.json())

const filmes = [
    {
        id: 1,
        title: "Harry Potter e a Pedra Filosofal",
        description: "Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.",
        genre: "Fantasia",
        releaseYear: 2001,
        image: "https://upload.wikimedia.org/wikipedia/pt/1/1d/Harry_Potter_Pedra_Filosofal_2001.jpg"
    }
]

const series = [
    {
        id: 1,
        title: "Stranger Things",
        description: "Na década de 1980, um grupo de amigos se envolve em uma série de eventos sobrenaturais na pacata cidade de Hawkins. Eles enfrentam criaturas monstruosas, agências secretas do governo e se aventuram em dimensões paralelas.",
        genre: "Ficção científica",
        releaseYear: 2016,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6iD3_zplJM4AuUeddrPXuy_sf_5A8cjAaA&s"
    }
]

app.get("/filmes", (req, res) => {
    const genre = req.query.genre
    if(!genre){
    } return res.json(filmes)
})

app.get("/series", (req, res) => {
    const genre = req.query.genre
    if(!genre){
    } return res.json(series)
})

// Criar um novo filme
app.post("/filmes", function(req, res) {
    const title = req.body.title
    const description = req.body.description
    const genre = req.body.genre
    const releaseYear = req.body.releaseYear

    // Validação
    if(!title || !description || !genre || !releaseYear) {
        return res.status(400).json({erro: "Título, descrição, gênero e ano de lançamento são obrigatórios!"})
    }

    const novoFilme = {
        id: 2,
        title: title,
        description: description,
        genre: genre,
        releaseYear: releaseYear
    }

    filmes.push(novoFilme)
    res.status(201).send()

})

// Criar uma nova série
app.post("/series", function(req, res) {
    const title = req.body.title
    const description = req.body.description
    const genre = req.body.genre
    const releaseYear = req.body.releaseYear

    // Validação
    if(!title || !description || !genre || !releaseYear) {
        return res.status(400).json({erro: "Título, descrição, gênero e ano de lançamento são obrigatórios!"})
    }

    const novaSerie = {
        id: 2,
        title: title,
        description: description,
        genre: genre,
        releaseYear: releaseYear
    }

    filmes.push(novaSerie)
    res.status(201).send()

})

// Buscar filme por id
app.get("/filmes/:id", function(req, res) {
    const id = parseInt(req.params.id)
    const filme = filmes.find(f => f.id == id)
    if (filme) {
        return res.json(filme)
    } else {
        res.status(404).json("Filme não encontrado")
    }
})

// Buscar série por id
app.get("/series/:id", function(req, res) {
    const id = parseInt(req.params.id)
    const serie = series.find(s => s.id == id)
    if (serie) {
        return res.json(serie)
    } else {
        res.status(404).json("Série não encontrada")
    }
})

// Segundo passo, colocar seu servidor para rodar
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost.3000")
})