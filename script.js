document.addEventListener('DOMContentLoaded', function () {
  var todoForm = document.getElementById('todoForm');
  var btnAddTodo = document.getElementById('btnAddTodo');
  var btnFIFO = document.getElementById('btnFIFO');
  var btnFILO = document.getElementById('btnFILO');
  var btnReset = document.getElementById('btnReset');

  btnAddTodo.addEventListener('click', function () {
    var title = document.getElementById('txtTitle').value;
    var details = document.getElementById('txtDetails').value;

    var todoItem = createTodoItem(title, details);

    var todoContainer = document.getElementById('todoContainer');
    todoContainer.appendChild(todoItem);

    todoForm.reset();
  });

  btnFIFO.addEventListener('click', function () {
  
    moveAllTodoToDone('todoContainer', 'doneContainer', false);
  });

  btnFILO.addEventListener('click', function () {
   
    moveAllTodoToDone('todoContainer', 'doneContainer', true);
  });

  btnReset.addEventListener('click', function () {
  
    var doneContainer = document.getElementById('doneContainer');
    var todoContainer = document.getElementById('todoContainer');
    doneContainer.innerHTML = '';
    todoContainer.innerHTML = '';
  });


    function createTodoItem(title, details) {
      var todoItem = document.createElement('div');
      todoItem.className = 'card';
      todoItem.innerHTML = '<div class="card-body"><h5 class="card-title">' + title + '</h5><p class="card-text">' + details + '</p></div>';

      
      var spaceElement = document.createElement('div');
      spaceElement.className = 'space'; 
      todoItem.appendChild(spaceElement);

      return todoItem;
  }


  function moveAllTodoToDone(todoContainerId, doneContainerId, reverseOrder) {
    var todoContainer = document.getElementById(todoContainerId);
    var doneContainer = document.getElementById(doneContainerId);


    var todoItems = Array.from(todoContainer.children);

    if (reverseOrder) {
    
      todoItems.reverse();
    }


    todoItems.forEach(function (todoItem) {
      todoContainer.removeChild(todoItem);
      doneContainer.appendChild(todoItem);
    });
  }
});
