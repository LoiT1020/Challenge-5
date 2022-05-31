
{var date = document.querySelector("#currentdate");
var currenttime= moment();

date.textContent= currenttime.format ("MMMM Do, YYYY - hh:mm A")}


{var schedule= $('span').text().trim();

var time = moment(schedule,"hh:mm A","L");
var attime= moment().format('hh:mm A');

//via the link https://stackoverflow.com/questions/23620498/comparing-two-times-with-moment-js
var ftime= moment(time, 'hh:mma');
var ctime=moment(attime, 'hh:mma');

console.log (ftime.diff(ctime,"hours"))

if (ctime.isAfter(ftime)){
    $("h3").addClass("list-group-item-secondary");
    }
else if (ftime.diff(ctime,"hours")=0){
    $("h3").addClass("list-group-item-warning");
    }
else if (ctime.isBefore(ftime)) {
    $("h3").addClass("list-group-item-success");
    }
};

$(".schedule").on("click", "p", function(){
 //copying the lesson
    // get current text of p element
  var text = $(this)
    .text()
    .trim();

  // replace p element with a new textarea
  var textInput = $("<textarea>").addClass("form-control").val(text);
  $(this).replaceWith(textInput);
 
    
  // auto focus new element
  textInput.trigger("focus");
});
// editable field was un-focused
$(".schedule").on("blur", "textarea", function() {
    // get current value of textarea
    var text = $(this).val();

    // recreate p element
    var taskP = $("<p>")
      .addClass("p-4")
      .text(text);
          
    //savetask
  
        localStorage.setItem("task", JSON.stringify(text))

    // replace textarea with new content
    $(this).replaceWith(taskP);
  });

  ///loadtask
  //loadTasks();