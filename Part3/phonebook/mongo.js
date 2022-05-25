const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
`mongodb+srv://Hassan:${password}@cluster0.mnwea.mongodb.net/phoneBook?retryWrites=true&w=majority`
mongoose.connect(url)

const persontSchema = new mongoose.Schema({
  name: String,
  number: String,

})

const Person = new mongoose.model('Person', persontSchema)

if(process.argv[3] && process.argv[4]){
  const name = process.argv[3]
  const number = process.argv[4]
  const person = new Person({
    name: name,
    number: number
  })

  person.save().then(() => {
    console.log(`added ${name} ${number} to the phonebook`)
    mongoose.connection.close()
  })
}

if(!(process.argv[3] && process.argv[4])){
  Person.find({}).then(people => {
    console.log('phonebook :')
    people.forEach(person => console.log(person.name,person.number))
    mongoose.connection.close()

  })
}





// Note.find({phonebook}).then(result => {
//     result.forEach(note => {
//       console.log(note)
//     })
//     mongoose.connection.close()
//   })