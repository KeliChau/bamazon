var mysql = require("mysql");
var inquirer = require('inquirer');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Iltc110617#!",
  database: "bamazon_db"
});

con.connect(function(err) { //leaves this js file and attempts to connect to MySQL and will return with success or error
  if (err) throw err; 
  console.log("Connected to database");
  showMenu(); //this is calling the function showMenu
});

function showMenu(){
  var sql = "SELECT * FROM products";	
  con.query(sql, function (err, result) {
    if (err) throw err;
    for (var i = 0; i < result.length; i++){
    	console.log("Product: ", result[i].product_name, "ID: ", result[i].item_id)       		
    }
 	askFirstQuestion(); //this is calling the function askFirstQuestion
  });
};

function askFirstQuestion(){
	inquirer.prompt([
		{
			type: "input", 
			name: "IDquestion",
			message: "Enter ID of item you'd like to purchase"
		},
		{
			type: "input",
			name: "quantityQuestion",
			message: "How many quantity to purchase?"
		}
	]).then(answers => {
		var id = parseInt(answers.IDquestion);
		var quantity = parseInt(answers.quantityQuestion);
		var sql = "SELECT * FROM products WHERE stock_quantity";
		console.log(id, quantity);
	});	
};

