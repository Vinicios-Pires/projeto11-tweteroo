import express, { json } from "express";
import cors from "cors";
import chalk from "chalk";

const app = express();
app.use(cors());
app.use(json());

const usuarios = [];

const tweets = [];

app.get("/tweets", (req, res) => {
   res.send(tweets.slice(-10).reverse());
});

app.post("/tweets", (req, res) => {
   const body = req.body;

   const nomeUser = usuarios.find(
      (nomeUser) => nomeUser.username === body.username
   );

   const tweet = {
      username: body.username,
      tweet: body.tweet,
      avatar: nomeUser.avatar,
   };

   tweets.push(tweet);
   res.status(200).send("OK");
});

app.post("/sign-up", (req, res) => {
   const body = req.body;

   const usuario = {
      username: body.username,
      avatar: body.avatar,
   };

   usuarios.push(usuario);
   res.status(200).send("OK");
});

app.listen(5000, () => {
   console.log(chalk.bold.green("server aberto em: localhost:5000/"));
});
