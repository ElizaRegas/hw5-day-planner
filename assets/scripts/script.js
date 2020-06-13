$('document').ready(function() {
  var hour;
  createTimeSlots();
})

function createTimeSlots() {
  hour = 9;
  $('.container').append('<div class="row"></div>');
  $('.row').append('<div class="col-sm-2" id="hourColumn"></div>');
  $('#hourColumn').append('<span id="hour">' + hour + '</span>');
  $('#hourColumn').append('<span>:00</span>');
  $('.row').append('<div class="col-sm-8" id="scheduleRow"></div>');
  $('#scheduleRow').append('<span id="scheduleText"></span>');
}