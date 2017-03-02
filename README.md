
# Week Two ShecureShel

## [Todo App](https://facn1.github.io/Week-2-ShecureShel-ToDo/)


Schedule

#### Day 1
- Worked as a group of four just to go through the instructions for part1
and created the addTodo function.
```
addTodo: function (todos, newTodo) {

  newTodo.id = todoFunctions.generateId();
  newTodo.done = false;
  var newTodos = todos.concat(newTodo);
  return newTodos;
},
```
- Split into groups of Two to work on the other functions:
  * Edgar and Hiba
   ```
   markTodo: function(todos, idToMark) {

     return todos.map(function(element){
     var newObj = {};
     newObj.id = element.id;
     newObj.description = element.description;
     newObj.done = element.done;

     if (element.id == idToMark) {newObj.done = !element.done;}
     return newObj;

     });
     ```
  * Lawson and Suha
  ```
  deleteTodo: function (todos, idToDelete) {

    function shouldBeDeleted(todo)
    {
      return  todo.id!==idToDelete;
    }
  return todos.filter(shouldBeDeleted);
  },
  ```

  #### Day 2
  - Contintued working in the same pairs:
  * Edgar and Hiba working on QUnit test in the morning and DOM manipulation in the afternoon.
  * Lawson and Suha researched part2.
  * as a group of 4 completed DOM manipulation.

