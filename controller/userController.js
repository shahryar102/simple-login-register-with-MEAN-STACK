import mongoose from 'mongoose';
import userSchema from '../models/Users';

const Users = mongoose.model('Users', userSchema);


// exports.validateRegister = (req, res, next) => {
//     console.log(req.sanitizeBody('name'));
// }



exports.register = async (req, res, next) => {
  // console.log(req.body);
    Users.create(req.body)
      .then((User) => {
          res.json(User);
      })
      .catch((err) => {
        console.log(err.message);
        if(err.message === "Cannot read property '1' of null") {
          res.json('Email already registered');
        }else {
          res.json(err.message);
        }
      });
  }


exports.login = async (req, res, next) => {
   console.log('request data:', req.body);
  const data = await Users.aggregate(
    [
      {
        $match: {
          email: req.body.email,
          password: req.body.password
        }
      },
      {
        $project: {
          password: 0
        }
      }
    ]
  );
  if(!data.length) {
    // req.flash('error', 'No account with that email exists.');
    res.json('No account with that email or password exists.');  
  }
  res.json(data[0]);
}


