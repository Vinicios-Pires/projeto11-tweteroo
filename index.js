import express, { json } from "express";
import cors from "cors";
import chalk from "chalk";

const app = express();
app.use(cors());
app.use(json());

const usuarios = [];

const tweets = [];

app.get("/tweets", (req, res) => {
   res.send(tweets.reverse().slice(0, 10));
});

app.post("/tweets", (req, res) => {
   const body = req.body;
   console.log("body tweet", body);

   const nomeUser = usuarios.find(
      (nomeUser) => nomeUser.username === body.username
   );

   const tweet = {
      username: body.username,
      tweet: body.tweet,
      avatar: nomeUser.avatar,
   };

   tweets.push(tweet);
   res.send(tweets);
});

app.post("/sign-up", (req, res) => {
   const body = req.body;
   console.log("body do user", body);

   const usuario = {
      username: body.username,
      avatar: body.avatar,
   };

   usuarios.push(usuario);
   res.send(usuarios);
});

app.listen(5000, () => {
   console.log(chalk.bold.green("server aberto em: localhost:5000/"));
});
