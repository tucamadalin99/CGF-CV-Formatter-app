const express = require('express');
const app = express();
const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server on on port: ${PORT}`);
})

app.use('/', express.static('../front-end'));