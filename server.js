/* eslint no-console: 0 */
const express = require("express");
const cors = require("cors");
const fs = require("fs");

let buffer = fs.readFileSync("./data/boards.json");
const boards = JSON.parse(buffer);

buffer = fs.readFileSync("./data/lists.json");
const lists = JSON.parse(buffer);

buffer = fs.readFileSync("./data/cards.json");
const cards = JSON.parse(buffer);

const app = express();
app.use(cors());

app.get("/boards", (req, res) => {
  setTimeout(() => res.json(boards), Math.floor(Math.random() * 5000));
});

app.get("/boards/:id", (req, res) => {
  const board = boards.find(item => item._id === req.params.id);
  if (board) {
    console.log(board.title);
    setTimeout(() => res.json(board), Math.floor(Math.random() * 5000));
  } else {
    console.log(404, req.params.id);
    res.status(404).json({ error: "board not found" });
  }
});

app.get("/boards/:id/lists", (req, res) => {
  const board_lists = lists.filter(item => item.board_id === req.params.id);
  if (board_lists) {
    setTimeout(() => res.json(board_lists), Math.floor(Math.random() * 5000));
  } else {
    res.json([]);
  }
});

app.get("/cards/:id", (req, res) => {
  const card = cards.find(item => item._id === req.params.id);
  if (card) {
    console.log(card.title);
    setTimeout(() => res.json(card), Math.floor(Math.random() * 5000));
  } else {
    console.log(404, req.params.id);
    res.status(404).json({ error: "card not found" });
  }
});

console.log(`Starting server on port 3001`);
app.listen(3001);
