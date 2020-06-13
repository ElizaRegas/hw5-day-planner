$("document").ready(function () {
  // global variables
  var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  var scheduleColumn;

  // for loop to generate divs for each work hour
  for (i = 0; i < hour.length; i++) {
    createTimeSlots(i, hour[i]);
  }

  // function to create a div for each work hour
  function createTimeSlots(i, hour) {
    // getting the current hour from moment.js
    var currentHour = moment().format("k");
    // changing the way the hour is displayed for accuracy after noon
    var displayHour = hour > 12 ? hour - 12 : hour;
    // variables to generate the columns for each row
    var hourColumn = $("<div class='col-sm-2 timeCol'></div>").text(
      displayHour + ":00"
    );
    scheduleColumn = $(
      `<div class='col-sm-8 schedule' id='${
        hour + "a"
      }'><input class="inputText"></div>`
    );
    var saveColumn = $(
      `<div class="col-sm-2" id="save"><button type="button" class="btn btn-info" id='${
        hour + "b"
      }'><i class="fas fa-save"></i></button></div>`
    );
    // appending rows to the html
    var newRow = $(`<div class='row' id='${hour}'></div>`).append(
      hourColumn,
      scheduleColumn,
      saveColumn
    );
    $(".container").append(newRow);

    // setting the row color based on the current time
    if (hour == currentHour) {
      $("#" + hour).css("background-color", "red");
    } else if (hour < currentHour) {
      $("#" + hour).css("background-color", "#d3d3d3");
    } else {
      $("#" + hour).css("background-color", "green");
    }

    var savedText = window.localStorage.getItem(hour + "a");
    console.log(savedText);
    if (savedText !== null) {
      $("#" + hour + "a input").val(savedText);
    }
  }

  function displayCurrentDate() {
    var currentDate = moment().format("dddd, MMMM Do, YYYY");
    $("#currentDay").text(currentDate);
  }
  displayCurrentDate();

  $(".btn").on("click", function () {
    var buttonId = $(this).attr("id");
    var textId = buttonId.replace("b", "a");
    var textContent = $("#" + textId).children()[0].value;
    //setting items in the local storage
    localStorage.setItem(textId, textContent);
  });
});
