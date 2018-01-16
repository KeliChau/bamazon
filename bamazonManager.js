var mysql = require("mysql");
var inquirer = require('inquirer');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Iltc110617#!",
  database: "bamazon_db"
});

con.connect(function(err) { // leaves this js file and attempts to connect to MySQL and will return with success or error
  if (err) throw err; 
  console.log("Connected to database");
});

function showMenu(){
	var sql = "SELECT * FROM products";	
  	con.query(sql, function (err, result) {
    if (err) throw err;
    for (var i = 0; i < result.length; i++){
    	console.log("Product: ", result[i].product_name, "ID: ", result[i].item_id)       		
    }
  });
};

function viewProducts(){
	console.log("We're going to show the product list");
};

function viewLowInventory(){
	console.log("We're going to show low inventory");
};

function addToInventory(){
	console.log("We're going to show add to inventory");
};

function addNewProduct(){
	console.log("We're going to show add new product");
};

inquirer.prompt([
	{
		type: "list", 
		name: "whichCommand",
		message: "Pick a command",
		choices: [
			"View Products",
			"View Low Inventory",
			"Add to Inventory",
			"Add New Product"
		]
	}
]).then(answers => { 
	console.log(answers, "Command");
	if (answers.whichCommand = "View Products"){
		viewProducts();
	}else if(answers.whichCommand = "View Low Inventory"){
		viewLowInventory();
	}else if(answers.whichCommand = "Add to Inventory"){
		addToInventory();
	}else if(answers.whichCommand = "Add New Product"){
		addNewProduct();
	}
});