var todo = (function() {

  var todoFunctions = {
    generateId: (function() {
      var idCounter = 0;
      return function () {
        return idCounter++;
      }
    })(),
    addTodo: function (todos, newTodo) {

      newTodo.id = todoFunctions.generateId();
      newTodo.done = false;
      var newTodos = todos.concat(newTodo);
      return newTodos;
    },
    deleteTodo: function (todos, idToDelete) {

      function shouldBeDeleted(todo)
      {
        return  todo.id!==idToDelete;
      }
    return todos.filter(shouldBeDeleted);
    },

    markTodo: function(todos, idToMark) {

      return todos.map(function(element){
        var newObj = {};

      Object.keys(element).forEach(function(key){
      newObj[key] =element[key];
      })

      if (element.id == idToMark) {newObj.done = !element.done;}
      return newObj;

      });

    },
    sortTodos: function(todos, sortFunction) {
      // stretch goal! Do this last
      // should leave the input arguement todos unchanged
      // sortFunction will have same signature as the sort function in array.sort
      // hint: array.slice, array.sort
    }
  }

  // part 2. the Dom
  var state = [
    { id: -3, description: 'first todo', done: false},
    { id: -2, description: 'second todo', done: false},
    { id: -1, description: 'third todo', done: false}
  ]; // this is our todoList

  var controller = {
    createTodoNode: function(todoData) {
      var todoNode = document.createElement('li');
      // you will need to use addEventListener

      // add span holding description
      var addSpan = document.createElement('span');
      addSpan.innerHTML = todoData.description;
      todoNode.appendChild(addSpan);

      // this adds the delete button
      var deleteButtonNode = document.createElement('button');
      deleteButtonNode.addEventListener('click', function(event) {
        state = todoFunctions.deleteTodo(state, todoData.id);
        controller.render(state);
      })

      todoNode.appendChild(deleteButtonNode);

      // add markTodo button
      var markTodoButtonNode = document.createElement('button');
      markTodoButtonNode.addEventListener('click', function(event) {
        state = todoFunctions.markTodo(state, todoData.id);
        controller.render(state);
      })

      todoNode.appendChild(markTodoButtonNode);
      // add classes for css

      //
      var addDoneSpan = document.createElement('span');
      addDoneSpan.innerHTML = todoData.done;
      todoNode.appendChild(addDoneSpan);

      return todoNode;
    },
    render: function(state) {
      var todoListWrapper = document.getElementById('todo-container');
      var todoListNode = document.createElement('ul');
      state.forEach(function(todoData) {
        todoListNode.appendChild(controller.createTodoNode(todoData))
      });

      // you may want to add a class for css
      console.log(todoListWrapper.firstChild);
      todoListWrapper.replaceChild(todoListNode, todoListWrapper.firstChild);
    }
  }

  // bind create todo form
  var addTodoForm = document.getElementById('add-todo');
  addTodoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var typedTodo = {description: event.target.description.value};

    state = todoFunctions.addTodo(state, typedTodo); // change this!! you should use todoFunctions.addTodo
    controller.render(state);
  });


  controller.render(state);

  return {
    controller,
    todoFunctions
  }

})();
