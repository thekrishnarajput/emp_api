const express = require('express');
const fs = require('fs');
const data1 = fs.readFileSync('./json/Employee1.json');
const data2 = fs.readFileSync('./json/Employee2.json');
const data3 = fs.readFileSync('./json/Priyanka_test.json');
const elements1 = JSON.parse(data1);
const elements2 = JSON.parse(data2);
const elements3 = JSON.parse(data3);
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(cors())

app.use('/employees-small', allData1);
function allData1(request, response) {
    response.send(elements1);
}

app.use('/employees', allData2);
function allData2(request, response) {
    response.send(elements2);
}

app.use('/employees', allData3);
function allData3(request, response) {
    response.send(elements3);
}


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})