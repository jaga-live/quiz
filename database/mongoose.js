const { connect } = require('mongoose')

const MONGO_URI = process.env.MONGO_URI
connect(MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(res => {
    console.log('MongoDB Atlas Connected')
})
    .catch(err => {
    console.log('Cannot Connect to MongoDB Atlas')
})