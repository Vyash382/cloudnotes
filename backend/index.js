const connectToMongo = require('./db');
connectToMongo();
const express = require('express')
var cors = require('cors')




const app = express()
app.use(express.json());
const port = 5000
app.use(cors())
//available routes
const authh = require('./routes/auth');
app.use('/api/auth',authh);
app.use('/api/notes',require('./routes/notes'));
// app.get('/', require('./routes/notes'));


app.listen(port, () => {
  console.log(`CloudNotes app listening on port ${port}`)
})