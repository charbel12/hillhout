const bodyParser = require('body-parser')

const express = require('express');

const authRoutes = require('./routes/auth')
const itemsRoutes = require('./routes/items')
const categoriesRoutes = require('./routes/categories')
const subcategoriesRoutes = require('./routes/subcategories')
const errorController = require('./controllers/error')

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Allow-Methods','GET, POST, DELETE, PUT')
  res.setHeader('Access-Control-Allow-Headers','Content-type, Authorization')
  next()
})


app.use('/auth',authRoutes)

app.use('/item',itemsRoutes)

app.use('/category',categoriesRoutes)

app.use('/subcategory',subcategoriesRoutes)



// app.use(errorController.get404)
// app.use(errorController.get500)

app.listen(port, () =>console.log(`listening on port ${port}`) )

// fs.readFile('./appversion.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   process.env.APP_VERSION = data.replace(/\n$/, "")
// })

