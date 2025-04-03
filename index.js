const express = require('express')

const app = express();
const UserRouter = require('./routes/user')   // User Route
const AdminRouter = require('./routes/admin') // Admin Route


//Middlewares for parsing request bodies

app.use('/admin',AdminRouter);
app.use('/users',UserRouter)





const port = 4000;
app.listen(port,() => console.log("Server started on Port" + port))
