const connectObject = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
};

const mySql = require("mysql");
const connection = mySql.createConnection(connectObject);

connection.connect(function(err){
    if (err) {
        throw err
    }
    console.log(`Connected as ID: ${connection.threadId}`);
    connection.end();
});

/*function displaySales() {
    var query = "SELECT * FROM products;";
    connection.query(query, function (err, response) {
        if (err) {
            throw err
        };
        console.log(response);
    });
};
displaySales();*/