const express = require('express');
const fs = require('fs');
const data = fs.readFileSync('./json/Employee.json');
const elements = JSON.parse(data);
const app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(cors())

app.use('/employees', allData);
function allData(request, response) {
    response.send(elements);
}


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})