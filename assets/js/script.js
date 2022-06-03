{var date = document.querySelector("#currentdate");
var currenttime= moment();

date.textContent= currenttime.format ("MMMM Do, YYYY - hh:mm A")}

var TimeObj={};

/*var loadTasks = function() {
    TimeObj = JSON.parse(localStorage.getItem("task"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!TimeObj) {
      TimeObj = {
        time:[],
        text:[]
      };
    }
  
    // loop over object properties
    $.each(TimeObj, function(list, arr) {
      // then loop over sub-array
      arr.forEach(function(task) {
        createTask(task.text,list);
      });
    });
};*/

//time block color
$('span').each(function() { 
    var hi= $( this ).text().trim();
    
    var time = moment(hi,"hh:mmA","L");
    var attime= moment().format('hh:mm A');

//via the link https://stackoverflow.com/questions/23620498/comparing-two-times-with-moment-js
var ctime=moment(attime, 'hh:mma');


if (time.diff(ctime,"hours")<0){
    $(this).addClass("bg-secondary");
    }
else if (time.diff(ctime,"hours")===0){
    $(this).addClass("bg-warning");
    }
else if (time.diff(ctime,"hours")>0) {
    $(this).addClass("bg-success");
    }

});
  


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
         .addClass("col-9 py-4")
         .attr("id","work-schedule")
         .text(text);
       
       // replace textarea with new content
       $(this).replaceWith(taskP);
       
});


//save task with button


$(".schedule").on("click","button",function(){

    var text= $(this).parent().find("p").text();
 
    var settime=  $(this).parent().parent().find('span').text();
 
    localStorage.setItem("timeObj", JSON.stringify(text));
})




var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("timeObj"));}
  loadTasks();