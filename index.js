/* IMPORTS itt az első két sorban importálom az express-t, a const path a path modult fogja beimportálni */

const express = require('express')
const path = require('path')

/* app néven elindítjuk az express modulunkat, meghatározzuk a port változót */
const app = express()
const port = 3000


/* a localhost: port vagy a 127.0.0.1:port/ felkeresésekor  elérhetővé tesszük az index.html fájlunkat */
app.get('/', (req, res) => {
    /* elküldjük az adott helyen lévő fájlunkat */
  res.sendFile(path.join(__dirname,
    '/frontend/index.html'))
})


/*  a localhost:port/style.css vagy 127.0.0.1:port/style.css felkeresésekor elérhetővé tesszük a style.css fájlunkat */
app.get('/style.css', (req, res) => {
res.sendFile(path.join(__dirname, '/frontend/static/css/style.css'))
})

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname,
      '/frontend/static/script.js'))
  })

  /* /public címen elérhetővé tesszük a /froontend/static mappánk tartalmát */
  app.use('/public', express.static(path.join(__dirname,'frontend/static')))

  app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, '/data/users.json'))
  })
/* házi: fejezd be az endpointot, ha azt írom be hogy 1, akkor az egész objektet kapjam meg(az oldalon ), ne azt hogy 1 , ha rossz id-t írok be pl 4 vagy as vagy bármi, akkor küldjem vissza azt hogy az nem egy id */
  app.get('/users/:userid/', (req, res) => {
    res.send(req.params.userid)
  })

  /* elkezdi figyelni az adott portot a számítógépen (localhost vagy 127.0.0.1) */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})