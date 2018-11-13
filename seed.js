const {db, Vegetable, Gardener, Plot} = require('./models')

//store returned promise in var
let prom1 = Vegetable.create({
  name: 'Carrot',
  color: 'Orange',
  planted_on: Date()
})
//store returned promise in var
let prom2 = Vegetable.create({
  name: 'Tomato',
  color: 'Red',
  planted_on: Date()
})
//store returned promise in var
let prom3 = Vegetable.create({
  name: 'Cucumber',
  color: 'Green',
  planted_on: Date()
})

//Promise.all runs promises in parallel
//call .then on promise.all to recieve an array like object of all promises passed
Promise.all([prom1, prom2, prom3]).then((arrVal) => {
  //return arrVal actually creates data rows in our table
  return arrVal
}).catch(console.log)
//dont forget to chain .catch to catch any errors that occured




db.sync({force: false})
.then(() => {
  console.log('Successful, database sync')
  db.close()
})
.catch((err) => {
  console.log('Oops something went wrong...', err)
  db.close()
})


// Chaining with .then() as opposed to using promise.all
// Runs prom
// Vegetable.create({
//   name: 'Carrot',
//   color: 'Orange',
//   planted_on: Date()
// }).then((promise) => {
//   return Vegetable.create({
//   name: 'Tomato',
//   color: 'Red',
//   planted_on: Date()
//   })
// }).then()
