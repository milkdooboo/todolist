const fs = require('fs');  // Node.js는 require을 통해 외부 모듈을 가져올 수 있음
const path = require('path');

const express = require('express');

const todoRoutes = require('./routes/todo'); // routes 폴더에 있는 todo.js

const db = require('./data/database');
const { error, time } = require('console');

const app = express();

app.set('view engine', 'ejs');  // view engine은 서버에서 js로 만든 변수를 보내줘서 클라이언트에서 활용할 수 있게 함, 정적 HTML을 동적으로
app.set('views', path.join(__dirname, 'views')); // 파일 경로 설정

app.use(express.urlencoded({extended : false})); // Node.js에 내장된 모듈인 querystring 모듈 사용
app.use(express.static('public')); // static file(정적 파일) 제공

app.use(todoRoutes);

app.get('/all-list', function (req, res) {
    db.query('SELECT * FROM ksa_todo_list.todos', (error, rows, fields) => {
        if(error) 
            throw error;

        res.render('index', { todos : rows });
    });
});

app.get('/add-list', function (req, res) {
    res.render('add');
});


app.post('/add-list', function (req, res) {
    db.query('INSERT INTO ksa_todo_list.todos (content, due_date, due_time) VALUES (?, ?, ?);', [req.body.content, req.body.date, req.body.time], (error, rows, fields) => {
        if(error) 
            throw error;
        console.log("data added");

        res.redirect('/all-list');  // todo 정상적으로 지워진 할 일만 지워지도록 개선
    });
});

app.get('/all-clear-list', function (req, res) {
    db.query('DELETE FROM ksa_todo_list.todos', (error, rows, fields) => {
        if(error) 
            throw error;
        console.log('Data all deleted');

        res.redirect('/all-list');  // todo 정상적으로 지워진 할 일만 지워지도록 개선
    });
});

app.get('/edit-page/:id', function (req, res) {
    db.query('SELECT * FROM ksa_todo_list.todos WHERE id = ?', [req.params.id], (error, rows, fields) => {
        if(error) 
            throw error;

        res.render('edit', { todos : rows });
    });
});

app.post('/edit-todo', function (req, res) {
    db.query('UPDATE ksa_todo_list.todos SET content = ?, due_date = ?, due_time = ? WHERE id = ?', [req.body.content, req.body.date, req.body.time, req.body.id], (error, rows, fields) => {
        if(error) 
            throw error;
        console.log("data edited");

        res.redirect('/all-list'); // todo 정상적으로 지워진 할 일만 지워지도록 개선
    });
});

app.post('/delete-list/:id', function (req, res) {
    db.query('DELETE FROM ksa_todo_list.todos WHERE id = ?;', [req.params.id], (error, rows, fields) => {
        if(error) 
            throw error;
        console.log("data deleted");

        res.redirect('/all-list');  // todo 정상적으로 지워진 할 일만 지워지도록 개선
    });
});

app.listen(3000);
console.log("Server started on port 3000");
