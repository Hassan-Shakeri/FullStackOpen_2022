require('dotenv').config()
const Person = require('./models/phonebook')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())
app.use(express.static('build'))
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
)

// let persons = [
//   {
//     id: 1,
//     name: "Arto Hellas",
//     number: "040-123456",
//   },
//   {
//     id: 2,
//     name: "Ada Lovelace",
//     number: "39-44-5323523",
//   },
//   {
//     id: 3,
//     name: "Dan Abramov",
//     number: "12-43-234345",
//   },
// ];

app.get('/', (request, response) => {
  response.send('<h2>hi there</h2>')
})

morgan.token('body', (req) => JSON.stringify(req.body.content))

app.get('/api/persons', (request, response) => {
  Person.find({}).then((people) => {
    response.json(people)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch((error) => next(error))
})

app.get('/info', async (request, response) => {
  const length = await Person.find({}).then(people => people.length)
  const total = `<h3>phonebook has info for ${length} people!</h3>`
  const time = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'full',
    hour12: false,
  })
  const info = `${total}${time}`
  response.send(info)
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end()
    })
    .catch((error) => next(error))
})


app.put('/api/persons/:id',(request,response,next) => {
  Person
    .findByIdAndUpdate({ _id:request.params.id },request.body,{ new:true, runValidators: true, context: 'query' })
    .then((result) => {
      response.json(result)
    })
    .catch((error) => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body


  // if (body === undefined) {
  //   return response.status(400).json({
  //     error: "content missing",
  //   });
  // }
  // if (body.name === undefined) {
  //   return response.status(400).json({
  //     error: "please enter your Name!",
  //   });
  // }
  // if (body.number === undefined) {
  //   return response.status(400).json({
  //     error: "please enter your Number!",
  //   });
  // }

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person
    .save()
    .then((savedPerson) => {
      response.json(savedPerson)
    })
    .catch((error) => next(error))
})



const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return response.status(404).send({ error: 'malformatted id' })
  } else if
  (error.name === 'ValidationError'){
    return response.status(400).json({ error: error.message })
  }
  next(error)
}
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})