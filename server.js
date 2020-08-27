const express = require('express')
const nunjucks = require('nunjucks')
const courses = require('./data')

const server = express()

server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req, res){
    const data = {
        rocketseatImg: '/assets/melhores-tecnologias.svg',
        title: 'The best <strong id="green">technologies</strong> in <strong id="green">programming</strong>, straight to the point and in the <strong id="green">right way</strong>.',
        about: 'In the middle of so much information and the amount of tools that come up every day, you need someone to take you in the right direction.',
        buttonText: 'I want to board in this rocket'
    }

    return res.render('about', {data})
})

server.get('/content', function(req, res) {
    return res.render('content', {items: courses})
})

server.get('/courses/:id', function(req, res) {
    const id = req.params.id

    const course = courses.find(function(course){
        return course.id == id
    })

    if (!course) {
        return res.send('Course not founded!')
    }

    return res.render('courses', {item: course})
})

server.listen(5000, function(){
    console.log('server is ok!')
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})