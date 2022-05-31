
var date = document.querySelector("#currentdate");
var currenttime= moment();

date.textContent= currenttime.format ("MMMM Do, YYYY - hh:mm A")



var schedule= $('span').text().trim();

var time = moment(schedule,"hh:mm A","L");
var attime= moment().format('hh:mm A');

//via the linkhttps://stackoverflow.com/questions/23620498/comparing-two-times-with-moment-js
var ftime= moment(time, 'hh:mma');
var ctime=moment(attime, 'hh:mma');



var yes= "you need to eat";
if (ctime.isAfter(ftime)){
    $("h3").addClass("list-group-item-danger");
    console.log (yes)}

