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

app.post('/komik', async (req, res) => {
    const data = req.body;
    try {
        const komik = await db.Komik.create(data);
        res.send(komik);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.get('/komik', async (req, res) => {
    try {
        const komik = await db.Komik.findAll();  
        res.send(komik);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});        
