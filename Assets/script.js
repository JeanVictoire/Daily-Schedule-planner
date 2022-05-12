// JQuery is amazing. it make thing shorter.

var submitBtn = $(".saveBtn");
var time = $(".time-block");
var textInputEl = $(".col-sm-10 description");
var currentHours = moment().hours(); // Military standard.

// timer function displaying the time at the top of the page.
function timer() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  $("#currentDay").text(rightNow);
}

setInterval(timer, 1000);

time.each(function (index, element) {
  var elementTime = Number(element.id);

  if (elementTime === currentHours) {
   
    $(element).children(".description").addClass("present");
  } else if (elementTime > currentHours) {
  
    $(element).children(".description").addClass("future");
  } else {
    
    $(element).children(".description").addClass("past");
  }

  var hour = $(element).first().text().trim();

  var description = localStorage.getItem(hour);

  if (description) {
    $(element).children(".description").val(description);
  }
});

submitBtn.on("click", function (event) {
  var description = $(event.currentTarget)
    .parent()
    .children(".description")
    .val();

  var hour = $(event.currentTarget).parent().first().text().trim();

  localStorage.setItem(hour, description);
});