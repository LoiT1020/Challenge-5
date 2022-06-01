{var date = document.querySelector("#currentdate");
var currenttime= moment();

date.textContent= currenttime.format ("MMMM Do, YYYY - hh:mm A")}

//edit, adding work-to-do to schedule
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
         .addClass("col-9 p-4")
         .attr("id","work-schedule")
         .text(text);
       
       // replace textarea with new content
       $(this).replaceWith(taskP);
});


$(".schedule").on("click","button",function(){

    var text= $("#work-schedule").text();

    localStorage.setItem("task", JSON.stringify(text))
})




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
else if (ftime.diff(ctime,"hours")===0){
    $("h3").addClass("list-group-item-warning");
    }
else if (ctime.isBefore(ftime)) {
    $("h3").addClass("list-group-item-success");
    }
};


$(".schedule").on("click","button",function(){

    var text= $("#work-schedule").text();

    localStorage.setItem("task", JSON.stringify(text))
})






var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("task"));}
  loadTasks();