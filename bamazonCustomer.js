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
  console.log("Welcome to Bamazon!");
  showMenu(); // this is calling the function showMenu
});

function showMenu(){
  var sql = "SELECT * FROM products";	
  con.query(sql, function (err, result) {
    if (err) throw err;
    for (var i = 0; i < result.length; i++){
    	console.log("Product: ", result[i].product_name, "ID: ", result[i].item_id)       		
    }
 	askFirstQuestion(); // this is calling the function askFirstQuestion
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
		var id = parseInt(answers.IDquestion); // turning string to integer for MySQL 
		var quantity = parseInt(answers.quantityQuestion); // turning string to integer for MySQL 
		var sql = "SELECT * FROM products WHERE item_id = " + id; // find product by id
		  con.query(sql, function (err, result) { 
		    if (err) throw err;
		    if (quantity <= result[0].stock_quantity){ // if else for handling stock quantity
		    	console.log("You bought the item " + result[0].product_name + " for " + result[0].price * quantity);
		    	var newQuantity = result[0].stock_quantity - quantity;
		    	var sql = "UPDATE products SET stock_quantity = " + newQuantity + " WHERE item_id = " + result[0].item_id; // update product with new stock quantity
		    		con.query(sql, function (err, result){
		    			console.log(result, "Updated Item Quantity: " + newQuantity);
		    		});	
		   		showMenu();	// restart app
		    }else{
		    	console.log("Item Quantity Not In Stock ");
		    	showMenu(); // restart app
		    };
		  });
		console.log(id, quantity);
	});	
};

