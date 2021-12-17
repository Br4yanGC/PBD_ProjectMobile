var express = require('express');
var app = express();

var mysql = require('mysql');
var cors = require('cors');
app.use(cors());
app.use(express.json({limit: "50mb"}));

var picturesDirectory = "figures/";
var fs = require('fs');

const port = 9000;

/*
  Método GET que selecciona un producto determinado en funcion de su user_id
*/
app.get('/products/:product_id', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });
  connection.connect();
  var myQuery = " SELECT product_id, product_name, product_trademark, product_price, " +
                " product_type, product_stock, product_image, created_date, modified_date " +
                " FROM products " +
                " WHERE product_id = ? ";
  var myValues = [req.params.product_id];
  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results[0]);
    connection.end();
  });
});

/* 
  Método get que selecciona los productos de determinado product_type de 1 sola bodega. 
  localhost:9000/products?user_id=1&product_type=viveres 
*/
app.get('/products', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });
  connection.connect();
  var myQuery = " SELECT product_id, product_name, product_trademark, product_price, " +
                " product_type, product_stock, user_id, product_image, created_date, modified_date " +
                " FROM products " +
                " WHERE 1 = 1 ";
  var myValues = [];
  if(req.query.user_id){
    myQuery += " AND user_id = ? ";
    myValues.push(req.query.user_id);
  }
  if(req.query.product_type){
    myQuery += " AND UPPER(product_type) = UPPER(?) ";
    myValues.push(req.query.product_type);
  }
  console.log(myQuery, myValues);
  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results);
    connection.end();
  });
});

/* 
  Método get que selecciona los productos de la tabla cart de determinad bodega. 
  localhost:9000/productsCart?user_id=1
*/
app.get('/productsCart', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });
  connection.connect();
  var myQuery = " SELECT product_id, product_name, product_trademark, product_price, " +
                " product_type, user_id " +
                " FROM cart " +
                " WHERE 1 = 1 ";
  var myValues = [];
  if(req.query.user_id){
    myQuery += " AND user_id = ? ";
    myValues.push(req.query.user_id);
  }
  console.log(myQuery, myValues);
  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results);
    connection.end();
  });
});



/*
  Método post que agrega productos a una determinada bodega.
  localhost:9000/products
    {
      "product_name": "Cepillo Dental",
      "product_trademark": "Colgate",
      "product_price": 3.5,
      "product_type": "aseo y limpieza",
      "product_stock": 5
      "user_id": 1
    }
*/
app.post('/products', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });
  connection.connect();
  var myQuery = " INSERT INTO products (product_name, product_trademark, product_price, " +
                " product_type, product_stock, user_id, product_image, created_date, modified_date) " +
                " VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW()); ";
  var myValues = [req.body.product_name, req.body.product_trademark,
      req.body.product_price, req.body.product_type, req.body.product_stock, req.body.user_id, req.body.product_image];

  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results);
    connection.end();
  });
});

/*
  Metodo que agrega productos a la tabla cart.
  localhost:9000/cart
    {   
      "product_name": "Cepillin",
      "product_trademark": "Colgate",
      "product_price": 1.5,
      "product_type": "aseo y limpieza",
      "user_id": 1
    }
*/
app.post('/cart', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });
  connection.connect();
  var myQuery = " INSERT INTO cart (product_name, product_trademark, product_price, " +
                " product_type, user_id) " +
                " VALUES (?, ?, ?, ?, ?); ";
  var myValues = [req.body.product_name, req.body.product_trademark,
      req.body.product_price, req.body.product_type, req.body.user_id];
  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results);
    connection.end();
  });
});

/*
  Método que borra un producto de determinado usuario en funcion del product_id.
  localhost:9000/products/2/52 
*/
app.delete('/products/:user_id/:product_id', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });
  connection.connect();
  var myQuery = " DELETE FROM products " +
                " WHERE product_id = ?; ";
  var myValues = [ req.params.product_id];
  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results);
    connection.end();
  });
});

/* 
  Método que borra un producto de determinado usuario en funcion del product_id en la tabla cart.
  localhost:9000/productsCart/1/1
*/
app.delete('/productsCart/:user_id/:product_id', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });
  connection.connect();
  var myQuery = " DELETE FROM cart " +
                " WHERE product_id = ?; ";
  var myValues = [ req.params.product_id];
  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results);
    connection.end();
  });
});

/*
  Metodo que modifica un producto en funcion de su product_id
  localhost:9000/products/51
    {
      "product_name": "Gaaa Dental",
      "product_trademark": "Colgate",
      "product_price": 3.5,
      "product_type": "aseo y limpieza",
      "product_stock": 5
    }
*/
app.put('/products/:product_id', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });
  connection.connect();
  var myQuery = " UPDATE products SET modified_date = NOW() ";
  var myValues = [ ];
  if (req.body.product_name){
    myQuery += " , product_name = ? ";
    myValues.push(req.body.product_name);
  }
  if (req.body.product_trademark){
    myQuery += " , product_trademark = ? ";
    myValues.push(req.body.product_trademark);
  }
  if (req.body.product_price){
    myQuery += " , product_price = ? ";
    myValues.push(req.body.product_price);
  }
  if (req.body.product_type){
    myQuery += " , product_type = ? ";
    myValues.push(req.body.product_type);
  }
  if (req.body.product_stock){
    myQuery += " , product_stock = ? ";
    myValues.push(req.body.product_stock);
  }
  myQuery += " WHERE product_id = ? "
  myValues.push(req.params.product_id);
  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results);
    connection.end();
  });
});

/* 
  Metodo que registra un usuario
  localhost:9000/users
    {   
      "username": "GatoCubas",
      "password": "GiselaTeOdio"
    }
*/
app.post('/users', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });
  connection.connect();
  var myQuery = " INSERT INTO users (username, password, modified_date, created_date) " +
                " VALUES (?, MD5(?), NOW(), NOW()) ";
  var myValues = [ req.body.username, req.body.password ];
  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results);
    connection.end();
  });
});

/*
  Metodo que en funcion del username y password que se pasaba en el body, se retornaba un username y user_id correspondiente
*/
app.post('/login', function(req, res){
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'StockBodegas'
  });
  connection.connect();
  var myQuery = " SELECT user_id, username " +
                " FROM users " +
                " WHERE username = ? " +
                " AND password = MD5(?) ";
  var myValues = [ req.body.username, req.body.password ];
  connection.query(myQuery, myValues, function(error, results, fields){
    if (error) throw error;
    res.send(results[0]);
    connection.end();
  });
});

app.post('/figures', function(req, res){
    var fileName = `${new Date().getTime()}.jpeg`;
    var picture_url = `${picturesDirectory}${fileName}`;

    fs.writeFile(`${picture_url}`, req.body.picture, 'base64', function(error){
        if (error) throw error;
        res.send({src_img: picture_url})
    })
})

app.use('/figures', express.static('figures'));

app.listen(port, function(){
  console.log("Server start in port 9000!")
})

