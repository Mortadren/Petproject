const express = require('express') //импорт библ экспресс
const generateUsers = require('./utils/generateUsers')
const path = require('path')

const users = generateUsers(100)
const app = express() // созд сущность сервера
const PORT = 3000 // объявл порт 

app.use(express.json()) //конфигуратор (обоззначаем что с боди приходит JSON)

app.listen(PORT, () => {   //начинаем слушать порт 
  console.log(`server is started and works on http://localhost:${PORT}`); 
});
app.get('/', (req, res) => {  //событие при гет запросе по пути '/'
    res.sendFile(path.join(__dirname, 'pages/index.html'));   //формируется правильный путь до указанного файла 
});

app.get('/successfullAuth', (req,res) => {
    res.sendFile(path.join(__dirname, 'pages/successfullAuth.html'));
    
})






app.post('/login', (req, res) => {
    const login = req.body.login
    const password = req.body.password
    const user= users.find((user) => user.login === login && user.password === password)
    if (user) {
        // res.sendFile(path.join(__dirname, 'pages/successfullAuth.html'));
        res.sendStatus(200)
        }
    else {
        res.sendStatus(401);
        
    }
})

