const express = require('express')
const exphbs = require('express-handlebars')
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const app = express()


const hbs = exphbs.create({
    defaultLayout: 'main', 
    extname: 'hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
  })
  app.engine('hbs', hbs.engine)
  app.set('view engine', 'hbs')
  app.set('views', 'views')

  


app.use(express.static(__dirname + '/public'))
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.render('home'))
app.get('/about', (req, res) => res.render('about'))

app.use((req, res) => {
  res.status(404)
  res.render('404')
})


app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`))