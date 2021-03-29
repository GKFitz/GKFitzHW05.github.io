//create a day planner  
//each hour needs to generate it own div; 12hours: 

//Dev side
//when page loads
// this will load the other function we will use

$(document).ready(init);
function init() {
    let d = getCurrentDate();

    getData();
    colorCode(d);
    submitBtn();

}

// Display current date
function getCurrentDate() {
    let d = new Date();
    let dString = d.toLocaleString();

    $("p+p").text(dString);

    return d;

}
// read data from local storage
// if there is data from LS insert into HTML structure
function getData() {
    let textAreas = $("textarea");
    // console.log(textAreas)

    $.each(textAreas, function(index, textArea){
        let id = textArea.id;
        let appt =localStorage.getItem(id);

        if(appt) {
            textArea.value= appt;
        }
    });
    
}
    

//even when there isnt data from LS we need color coding

function colorCode(d) {
    let hours = d.getHours();
    let amOrpm = "am";
    if(hours > 12) {
        hours -= 12;
        amOrpm = "pm";
    }
    let textArea = $("#" + amOrpm + hours);
    if(textArea) {
        textArea.parent("li").addClass("current");
    }

    
}
// addEventListeners to all save buttons

function submitBtn() {
    let buttons = $("button");
    $.each(buttons, function(index, button) {
        $(button).on("click", saveAppt);
    });
}




//client
// when user clicks save btn
// saves the timeslot, and the text to LS list

function saveAppt() {
    let button = $(this);
    let textArea = button.prev();
    let id = textArea.attr("id");
    let appt = textArea.val();
    localStorage.setItem(id, appt);
    
}



