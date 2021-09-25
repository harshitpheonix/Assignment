const  express =require("express");
const dotenv = require('dotenv');

const app = express();

app.use(express.json());

app.use("/report",require("./routes/report"));

app.listen(4000,()=>{
    console.log("Server is running on PORT: 4000.")
})