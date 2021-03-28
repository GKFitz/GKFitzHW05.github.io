//create a day planner  
//each hour needs to generate it own div; 10hours: 

//Dev side
//when page loads
// this will load the other function we will use
$(document).ready(init);
function init() {
    var d = getCurrentDate();

    getData():
   
}

// Display current date
function getCurrentDate() {
    var d = new Date();
    var dString = d.toLocaleString();

    $("p+p").text(dString);

    

}

// read data from local storage
function getData() {
    var textAreas = $("textarea");
    // console.log(textAreas)

    $.each(textAreas, function(index, textArea){
        let id = textArea.id;
        let appt =localStorage.getItem(id);

        if(appt) {
            textArea.value= appt;
        }
    });
    
}
// if there is data from LS insert into HTML structure
//even when there isnt data from LS we need color coding
// addEventListeners to all save buttons




//client
// when user clicks save btn
// saves the timeslot, and the text to LS list





