const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "mukta", email: "mukta10@gmail.com" },
  { id: 2, name: "mukti", email: "mukti@gmail.com" },
  { id: 3, name: "mala", email: "mukt@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post method called", req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`server started on port: ${port}`);
});
