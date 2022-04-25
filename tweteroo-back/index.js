import express from "express"
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors());

let usuarios = [];
let tweets = [];

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;
    if(username && avatar){
        usuarios.push({username: username, avatar: avatar});
        res.send("OK")
    }else {
        res.send("Todos os campos devem ser preenchidos")
    }
});


app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;
    if(username && tweet){
        tweets.push({username: username, tweet: tweet});
        res.send("OK")
    }else {
        res.send("Todos os campos devem ser preenchidos")
    }
});

app.get("/tweets", (req, res) => {

})
app.listen(5000, () => {
    
})

