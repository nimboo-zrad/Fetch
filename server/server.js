const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "../src")));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "../fetch.html"));

});


app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost: ${PORT}`);
});
