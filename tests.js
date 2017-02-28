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

// QUnit.test( "test addToDo doesn't mutate todo array", function( assert ) {
//   assert.deepEqual( todo.todoFunctions.addTodo(toDoArray, myNewToDo), toDoArray, "todo is unmutated" );
// });
