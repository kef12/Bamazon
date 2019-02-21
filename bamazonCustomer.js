var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "127.0.0.1",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Wltyi676!",
    database: "bamazon_DB"
  });

  connection.connect(function(error) {
    if (error) throw error;
    console.log("connected as id " + connection.threadId);
    showProducts();
  });

  function showProducts() {
      connection.query("SELECT * FROM products", function(err,res) {
          if (err) throw err;
          for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + "|" + res[i].stock_quantity);
          }
          console.log("-----------------------------------");

        pickProduct();
      });
    }
  function pickProduct() {
    inquirer.prompt([
      {
        name: "item",
        type: "input",
        message: "Enter the ID of the product you want to purchase"
      },
      {
        name: "count",
        type: "input",
        message: "How many would you like to buy?"
      }

    ]).then(function(answer){
      connection.query("SELECT item_id, product_name, price, stock_quantity FROM products WHERE ?", 
      {item_id: answer.item}, function(err, res){
        if (parseInt(answer.count) > res[0].stock_quantity) {

          console.log("Sorry, there are only " + res[0].stock_quantity + " left. Please chose another item.");
          pickProduct();

      }
      else {
        console.log("Your purchase of " + answer.count + ' ' + res[0].product_name +"/s total cost is: $ " + parseInt(res[0].price) * parseInt(answer.count));
       var quantityLeft = res[0].stock_quantity - answer.count;
              console.log(quantityLeft);
              connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                  {
                    stock_quantity: quantityLeft
                  },
                  {
                    item_id: answer.item
                  }
                ],
                function(error) {
                  if (error) throw err;
                 
                 
                }); 
              console.log("Inventory updated. There are  " + quantityLeft + " left"); 
              showProducts();
          }
        })
    });
};

