# Bamazon

## Table of Contents
+ [Overview](#overview)
+ [Assignment](#assignment)
+ [Visuals](#visuals)
+ [Future Development](#future-development)
+ [Contributing](#contributing)
+ [Acknowledgments](#acknowledgments)
+ [License](#license)

## Overview
Bamazon is a CLI application using Node.js and MySQL that allow users to take orders and update stock items from the store's inventory.

## Assignment
This application is an assignment for [GA Tech's Coding Program](https://codingbootcamp.pe.gatech.edu/), Full-Time Fall 2017 Cohort.

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

## Visuals
![Alt Text](assets/visuals/Bamazon.gif)

## Future Development
+ Manager View
+ Supervisor View

## Contributing
1. Fork this repository
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Acknowledgments
+ [Tom McCarthy](https://www.linkedin.com/in/tom-mccarthy-13961095), Full Stack Developer

## License 
#### MIT License

##### Copyright (c) 2018 Keli Chau

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### [:top:](#Bamazon)
