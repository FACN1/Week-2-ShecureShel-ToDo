

// {
//   id: /*the id of the todo*/
//   description: /*the description of the todo item*/,
//   done: /*true or false, indicates whether the todo is done*/
// }




QUnit.test( "addToDo test", function( assert ) {
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


  assert.deepEqual( todo.todoFunctions.addTodo(toDoArray, myNewToDo), expected, "Newtodo added to todos" );
});


QUnit.test( "test for mutatetion input array", function( assert ) {

  var testarr= [{id: 1, description: "clean the house", done: false}, {id: 2, description: "clean the car", done: false}];
  var testobject = {id: 2, description: "clean the car", done: false  };
  var copy=testarr.slice();
  todo.todoFunctions.addTodo(testarr, testobject);


  assert.deepEqual( testarr, copy, "Newtodo  mark todo to todos" );
});


QUnit.test( "markTodo toggles done", function( assert ) {
var testarr= [{id: 1, description: "clean the house", done: false}, {id: 2, description: "clean the car", done: false}];
var idMarker = 2;
var correctReturn = [{id: 1, description: "clean the house", done: false}, {id: 2, description: "clean the car", done: true}]

  assert.deepEqual( todo.todoFunctions.markTodo(testarr, idMarker), correctReturn, "id 2 is switched to true!" );
});

QUnit.test( "markTodo toggles done", function( assert ) {
var testarr= [{id: 1, description: "clean the house", done: false}, {id: 2, description: "clean the car", done: true}];
var idMarker = 2;
var correctReturn = [{id: 1, description: "clean the house", done: false}, {id: 2, description: "clean the car", done: false}]

  assert.deepEqual( todo.todoFunctions.markTodo(testarr, idMarker), correctReturn, "id 2 is switched to false!" );
});

QUnit.test( "another addToDo test", function( assert ) {
  var todos = [];
  var newTodo = {description: 'newdescription'};
  var newTodo2 = {description: 'newdescription'};
  todos = todo.todoFunctions.addTodo(todos, newTodo);
  todos = todo.todoFunctions.addTodo(todos, newTodo2);
  assert.notEqual(todos[0].id, todos[1].id, "check generateId function increments ids correctly");

});


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
