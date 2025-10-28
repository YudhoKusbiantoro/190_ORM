const express = require('express');
const app = express();
const db = require('./models');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`); 
});

db.sequelize.sync.then((result) => {
    app.listen(3000, () => {
        console.log('SServer Startup');
    })
})
    .catch((err) => {
        console.log(err);
})




