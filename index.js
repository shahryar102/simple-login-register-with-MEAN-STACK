import { PORT, db } from './config';
import mongoose from 'mongoose';

const port = PORT || 5000;
const conn = mongoose.connection;

mongoose.connect(db, 
  {useCreateIndex: true,
    useNewUrlParser: true} );
require('./models/Users');
mongoose.Promise = global.Promise;
conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function() {
  // we're connected!  
  console.log('Mongodb connection Established');
});


import  app  from './app';
// console.log(db);
// console.log(`serving ${www}`);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
