import express from "express";
import { Port } from "./config.js";
import mongoose from "mongoose";
import doctorModel from "./models/doctor.js";
import patiantModel from "./models/patiant.js";
import nurseModel from "./models/nurse.js";
import adminModel from "./models/admin.js";
import cors from 'cors';


const app = express();
app.use(express.json())
app.use(cors())

app.post('/login', (request, response) => {
    const { id, password } = request.body;
  
    doctorModel.findOne({ id: id })
      .then(doctor => {
        if (doctor) {
          if (doctor.password === password) {
            response.json("success");
          } else {
            response.json("Password is not correct");
          }
        } else {
          nurseModel.findOne({ id: id })
            .then(nurse => {
              if (nurse) {
                if (nurse.password === password) {
                  response.json("success");
                } else {
                  response.json("Password is not correct");
                }
              } else {
                adminModel.findOne({ id: id })
                  .then(admin => {
                    if (admin) {
                      if (admin.password === password) {
                        response.json("success");
                      } else {
                        response.json("Password is not correct");
                      }
                    } else {
                      response.json('Invalid ID');
                    }
                  })
                  .catch(error => {
                    console.log(error);
                    response.json("An error occurred while authenticating");
                  });
              }
            })
            .catch(error => {
              console.log(error);
              response.json("An error occurred while authenticating");
            });
        }
      })
      .catch(error => {
        console.log(error);
        response.json("An error occurred while authenticating");
      });
});
  

app.get('/getinfo', (request, response) => {
    Promise.all([doctorModel.find(), patiantModel.find(), nurseModel.find()])
  .then(([doctors, patiants, nurses]) => response.json({ doctors, patiants, nurses }))
  .catch((err) => response.json(err));
})


app.post('/dashboard', (request, response) => {
    patiantModel.create(request.body)
        .then(patiants => response.json(patiants))
    .catch(err => response.json(err))
})





mongoose.connect('mongodb://127.0.0.1:27017/hospital')
    .then(() => {
        console.log('app is connected to the database')
        app.listen(Port, () => {
            console.log(`App is listening to port: ${Port}`);
        });
    })

    .catch((error) => {
        console.log(error)
    })