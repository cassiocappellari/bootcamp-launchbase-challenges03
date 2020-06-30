const express = require('express')
const nunjucks = require('nunjucks')
const courses = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false
})

server.get('/', function(req, res){
    const data ={
        rocketseatImg: '/assets/melhores-tecnologias.svg',
        title: 'The best <strong id="green">technologies</strong> in <strong id="green">programming</strong>, straight to the point and in the <strong id="green">right way</strong>.',
        about: 'In the middle of so much information and the amount of tools that come up every day, you need someone to take you in the right direction.',
        buttonText: 'I want to board in this rocket',
        socialMedia: [
            {name: 'facebook'},
            {name: 'instagram'},
            {name: 'twitter'},
            {name: 'youtube'}
        ]
    }

    return res.render('about', {data})
})

server.get('/content', function(req, res) {
    return res.render('content', {items: courses})
})

server.listen(5000, function(){
    console.log('server is ok!')
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})