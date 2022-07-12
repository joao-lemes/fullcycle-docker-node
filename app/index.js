const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql");
const connection = mysql.createConnection(config);

const sql = "SELECT * FROM users";

app.get("/", (req, res) => {
  let users = "";
  connection.query(sql, function (error, result) {
    if (error) throw error;
    result.forEach((item) => {
      users += "<li>" + item.name + "</li>";
    });

    res.send(
      "<h1>Full Cycle Rocks!</h1><h3>Lista de Usuários</h3><ul>" +
        users +
        "</ul>"
    );
  });
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
