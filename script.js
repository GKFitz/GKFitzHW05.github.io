//create a day planner  
//each hour needs to generate it own div; 10hours: 

//Dev side
//when page loads
// this will load the other function we will use
$(document).ready(init);
function init() {
    let d = getCurrentDate();

   
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
//even when there isnt data from LS we need color coding
// addEventListeners to all save buttons




//client
// when user clicks save btn
// saves the timeslot, and the text to LS list





