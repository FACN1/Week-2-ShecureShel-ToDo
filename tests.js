QUnit.test( "hello test", function( assert ) {
  assert.equal( 1, 1, "Passed!" );
});

// {
//   id: /*the id of the todo*/
//   description: /*the description of the todo item*/,
//   done: /*true or false, indicates whether the todo is done*/
// }


var toDoArray = [
{
  id: todo.todoFunctions.generateId(),
  description: "walk the dog",
  done: false
},
{
  id: todo.todoFunctions.generateId(),
  description: "clean the house",
  done: false
}
];

var myNewToDo = {
  description: "clean the car",
  done: false
}

var expected = [
{
  id: 0,
  description: "walk the dog",
  done: false
},
{
  id: 1,
  description: "clean the house",
  done: false
},
{
  id: 2,
  description: "clean the car",
  done: false
}
];

QUnit.test( "addToDo test", function( assert ) {
  assert.deepEqual( todo.todoFunctions.addTodo(toDoArray, myNewToDo), expected, "Newtodo added to todos" );
});

QUnit.test( "another addToDo test", function( assert ) {
  var todos = [];
  var newTodo = {description: 'newdescription'};
  var newTodo2 = {description: 'newdescription'};
  todos = todo.todoFunctions.addTodo(todos, newTodo);
  console.log(newTodo);
  todos = todo.todoFunctions.addTodo(todos, newTodo2);
  console.log(todos);
  assert.notEqual(todos[0].id, todos[1].id, "id's should be different");
});

// QUnit.test( "test addToDo doesn't mutate todo array", function( assert ) {
//   assert.deepEqual( todo.todoFunctions.addTodo(toDoArray, myNewToDo), toDoArray, "todo is unmutated" );
// });

var testArray = [
{
  id: 0,
  description: "walk the dog",
  done: false
},
{
  id: 1,
  description: "clean the house",
  done: false
},
{
  id: 2,
  description: "clean the car",
  done: false
}
];

var testDelete = 1;


var expectedArray = [
  {
    id: 0,
    description: "walk the dog",
    done: false
  },

  {
    id: 2,
    description: "clean the car",
    done: false
  }
  ];


QUnit.test( "deleteTodo test", function( assert ) {
  assert.deepEqual( todo.todoFunctions.deleteTodo(testArray, testDelete), expectedArray, "object with toDelete id is deleted" );
});