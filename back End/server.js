const app = require('./src/app')
const connectDB = require('./src/db/db')


connectDB();
app.listen(3500 , ()=>{
    console.log('server connected to the 3500');
})