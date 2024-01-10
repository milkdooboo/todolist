I made my todolist with HTML, CSS, and Javascript.
I used Node.js for convenient web development.
I created server using Node.js and I used Node.js web application framework 'express'.
I used EJS(Embedded JavaScript Template) for Dynamic html, so I could insert Javascript contents like HTML tag.
I used mysql for Database.


1. app.js
   /all-list : selects all lists in mysql and renders index.ejs
   
   /add-list : renders add.ejs page when you press '추가하기->' button,
             you can add your todolist and press '추가' button,
             and it posts content, date, time parameter to /add-list page.
             Last it redirects /all-list page, and your list is added.

   /all-clear-list : If you press '모두 삭제' button, it deletes all list data.

   /edit-page/:id : If you press '편집' button next to each list, edit.ejs page is rendered.
                   each list has this button, so it deliver id to server.
                   you can edit list, and press 'update' button, data will be edited.

  /delete-list/:id : If you press '삭제' button next to each list, that list will be deleted.

2. add.css is linked to add.ejs, edit.css is linked to edit.ejs, and index.css is linked to index.ejs.

3. database.js
   This code connents to mysql.
   I made connection using createPool, and exported module.

4. todo.js
   I used express router, and exported module.


What I learned from making my todo list : how to use api making my project, 
                                          use database(mysql) : make tables, connent mysql with Node.js and some mysql commands( select, delete, insert, update)
                                          uses of Node.js, express, and EJS
                                          
What was difficult for me( What I will study more about) : Dealing with request parameter and response parameter in my code was difficult first.
                                                         use id, content, due_date, due_time for parameter and using it in api took a long time in my project.
  
   
