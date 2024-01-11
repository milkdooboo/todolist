# __Introduction__

* Written in ___HTML, CSS, Javascript___
* I used ___Node.js, express, EJS, and mysql___

---
# __Main function__

1. see all lists on main page
2. edit or delete each list
3. delete all list at once
4. add list

---
# __Details__

## 1. app.js

   ### 1) /all-list
   * selects all lists in mysql and renders index.ejs
   
   ### 2) /add-list
   * renders add.ejs page when you press '추가하기->' button

   * add your todolist and press '추가' button

   * it posts content, date, time parameter to /add-list page.
   
   * Last it redirects /all-list page, and list is added.

   ### 3) /all-clear-list
   * press '모두 삭제' button, it deletes all list data.

   ### 4) /edit-page/:id
   * press '편집' button next to each list, edit.ejs page is rendered.
   
   * each list's id is posted by parameter
   
   * edit list and press 'update' button, data will be edited.

  ### 5) /delete-list/:id 
   * press '삭제' button next to each list, it will be deleted.


## 2. database.js
   * connents to mysql
   * makes connection using createPool and exports module.

## 3. todo.js
   * used express router, and exported module.

---

# __Contributors__
Seonah Kang(milkdooboo)

---

# __Version__
v.0.1

---

# __Review__

## What I learned
* how to use api 
* using database(mysql)
* connent mysql with Node.js
* some mysql commands( select, delete, insert, update)
* uses of Node.js, express, and EJS
                                          
## What I will study more
* Dealing with request parameter and response parameter
* using id, content, due_date, due_time for parameter
  
   
