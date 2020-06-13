$('document').ready(function() {

  var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  var scheduleColumn;

  for (i = 0; i < hour.length; i++) {
    createTimeSlots(i, hour[i]);
  }

function createTimeSlots(i, hour) {
  var currentHour = moment().format('k');
  var displayHour = hour > 12 ? hour - 12 : hour;
  var hourColumn = $("<div class='col-sm-2'></div>").text(displayHour + ":00");
  scheduleColumn = $(`<div class='col-sm-8 schedule' id='${hour + "a"}'><input class="inputText"></div>`);
  var saveColumn = $(`<div class="col-sm-2"><button type="button" class="btn btn-info" id='${hour + "b"}'>Save</button></div>`)
  var newRow = $(`<div class='row' id='${hour}'></div>`).append(hourColumn, scheduleColumn, saveColumn);
  var hr = $('<hr>');
  $('.container').append(newRow, hr);

  if (hour == currentHour) {
    $("#" + hour).css("background-color","red");
  } else if (hour < currentHour) {
    $("#" + hour).css("background-color","grey");
  } else {
    $("#" + hour).css("background-color","green");
  }

  var savedText = window.localStorage.getItem(hour + "a");
  console.log(savedText);
  if (savedText !== null) {
    $('#' + hour + 'a input').val(savedText);
  }
}

function displayCurrentDate() {
  var currentDate = moment().format('MMMM Do YYYY');
  $('#currentDay').text(currentDate);
}
displayCurrentDate();

// WHEN I click into a timeblock
// THEN I can enter an event

// $('.schedule').on('click', function() {
//   $(this).append('<input class="inputText">');
//   $(this).off('click');  
// })

$('.btn').on('click', function() {
  var buttonId = $(this).attr('id');
  var textId = buttonId.replace('b', 'a');
  var textContent = $('#' + textId).children()[0].value;
  //setting items in the local storage
  localStorage.setItem(textId, textContent);
})











// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist

// function init() {
//   // Get stored todos from localStorage
//   // Parsing the JSON string to an object
//   var storedSchedule = JSON.parse(localStorage.getItem("todos"));

//   // If todos were retrieved from localStorage, update the todos array to it
//   if (storedTodos !== null) {
//     todos = storedTodos;
//   }

//   // Render todos to the DOM
//   renderTodos();
// }

// function storeTodos() {
//   // Stringify and set "todos" key in localStorage to todos array
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// // When form is submitted...
// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var todoText = todoInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (todoText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   todos.push(todoText);
//   todoInput.value = "";

//   // Store updated todos in localStorage, re-render the list
//   storeTodos();
//   renderTodos();
// });

// // When a element inside of the todoList is clicked...
// todoList.addEventListener("click", function(event) {
//   var element = event.target;

//   // If that element is a button...
//   if (element.matches("button") === true) {
//     // Get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//     todos.splice(index, 1);

//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   }
// });

})
