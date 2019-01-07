const cors = require('cors');
const express = require('express');



const port = 3000;

const app = express();
app.disable('x-powered-by');


app.use(cors());
app.use(express.static(`${__dirname}/../public`));




app.listen(port, () => console.log(
  `Express Server Now Running On localhost:${port}`,
));
