const app = require('./app')
const connectDatabase = require('./config/database');

const dotenv = require('dotenv');
//setting up config file


//connecting to data base

connectDatabase();

dotenv.config({path: 'backend/config/config.env'})
app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})