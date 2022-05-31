
var date = document.querySelector("#currentdate");
var currenttime= moment();

date.textContent= currenttime.format ("MMMM Do, YYYY - hh:mm A")

/*var schedule= $()
var time = ;
if (moment().isAfter(time)) {
    $(taskEl).addClass("list-group-item-secondary");
  }
else if (Math.abs(moment().diff(time, "hours")) =0) {
    $(taskEl).addClass("list-group-item-danger");
  }
else if (Math.abs(moment().diff(time, "hours")) >1){
    $(taskEl).addClass("list-group-item-success")
};*/