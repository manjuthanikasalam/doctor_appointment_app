const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const PatientModel = require('./models/Patient')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/patient")

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    PatientModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ status: "Success" });
                } else {
                    res.json({ status: "Error", message: "Incorrect password" });
                }
            } else {
                res.json({ status: "Error", message: "No record existed" });
            }
        })
});

app.post('/register', (req, res) => {
    PatientModel.create(req.body)
        .then(() => res.json({ status: "Success" }))
        .catch(err => res.json({ status: "Error", message: err.message }));
});

app.listen(3001, () => {
    console.log("server is running");
});











// const express = require('express')
// const mongoose = require("mongoose")
// const cors = require("cors")
// const PatientModel = require('./models/Patient')

// const app = express()
// app.use(express.json())
// app.use(cors())

// mongoose.connect("mongodb://127.0.0.1:27017/patient")

// app.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     PatientModel.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 if (user.password === password) {
//                     res.json({ status: "Success" })  // Changed to send a JSON object
//                 } else {
//                     res.json({ status: "Error", message: "Incorrect password" })  // Changed to send a JSON object
//                 }
//             } else {
//                 res.json({ status: "Error", message: "No record existed" })  // Changed to send a JSON object
//             }
//         })
// })

// app.post('/register', (req, res) => {
//     PatientModel.create(req.body)
//         .then(patients => res.json(patients))
//         .catch(err => res.json(err))
// })

// app.listen(3001, () => {
//     console.log("server is running")
// })








// const express = require('express')
// const mongoose = require("mongoose")
// const cors = require("cors")
// const PatientModel = require('./models/Patient')

// const app = express()
// app.use(express.json())
// app.use(cors())

// mongoose.connect("mongodb://127.0.0.1:27017/patient")

// app.post("/login", (req, res)=>{
//     const {email, password} = req.body;
//     PatientModel.findOne({email: email})
//     .then(user => {
//         if(user) {
//             if(user.password === password) {
//                 res.json("Success")
//             }else{
//                 res.json("the password is incorrect")
//             }
//         }else{
//             res.json("NO record existed")
//         }
//     })
// })

// app.post('/register',(req,res) =>{
//     PatientModel.create(req.body)
//     .then(patients => res.json(patients))
//     .catch(err => res.json(err))
// })

// app.listen(3001, () =>{
//     console.log("server is running")
// })

