# Bamazon

## Overview
Bamazon is a CLI application using Node.js and MySQL that allow users to take orders and update stock items from the store's inventory.

#### Assignment
This application is an assignment for [GA Tech's Coding Boot Camp](https://codingbootcamp.pe.gatech.edu/), Full-Time Fall 2017 Cohort.

### Visuals
#### Demo
https://www.youtube.com/watch?v=fIPyV4fIGW4

## Acknowledgments
Tom McCarthy, Full Stack Web Developer and Boot Camp Tutor, for his guidance on this assignment

## Future Plans

### Manager View (Challenge Two)
+ Create a new Node.js application called bamazonManager.js that will run:
* List of set of menu options:
  * View Products for Sale
  * View Low Inventory
  * Add to Inventory
  * Add New Product
  
 * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.
 
 * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.
 
 * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.
 
 * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.
 
 ### Supervisor View (Challenge Three)
 1. Create a new MySQL table called `departments`. Your table should include the following columns:
   * department_id
   * department_name
   * over_head_costs (A dummy number you set for each department)

2. Modify the products table so that there's a product_sales column and modify the `bamazonCustomer.js` app so that this value is updated with each individual products total revenue from each sale.

3. Modify your `bamazonCustomer.js` app so that when a customer purchases anything from the store, the price of the product multiplied by the quantity purchased is added to the product's product_sales column.
   * Make sure your app still updates the inventory listed in the `products` column.

4. Create another Node app called `bamazonSupervisor.js`. Running this application will list a set of menu options:
   * View Product Sales by Department
   * Create New Department

5. When a supervisor selects `View Product Sales by Department`, the app should display a summarized table in their terminal/bash window. Use the table below as a guide.

| department_id | department_name | over_head_costs | product_sales | total_profit |
| ------------- | --------------- | --------------- | ------------- | ------------ |
| 01            | Electronics     | 10000           | 20000         | 10000        |
| 02            | Clothing        | 60000           | 100000        | 40000        |

6. The `total_profit` column should be calculated on the fly using the difference between `over_head_costs` and `product_sales`. `total_profit` should not be stored in any database. You should use a custom alias.

7. If you can't get the table to display properly after a few hours, then feel free to go back and just add `total_profit` to the `departments` table.
