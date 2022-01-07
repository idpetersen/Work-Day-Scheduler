//setting global variables
var timeStamp = moment();
$("#timeStamp").text(timeStamp.format('MMMM Do YYYY'));
var event = $('.event');
var saveBtn = $('.save-btn');
//variable timeNow is the current time
var timeNow = moment();
var taskList = $('.task-list');
//Empty variable used to parse text data into an array
var textContent;
//saving text content with Local storage
function save(event) {
    event.preventDefault();
}

//loading text to it's appropriate box with local storage
function load() {};


//updating time using moment and walking the dom using query
//setting variable time to check if each child using i is equal to the current time
function update() {
    for (var i = 0; i < 9; i++) {
        //Adding 9 to the end of time to match the actual hours of the day. If not, this would think the 9am slot was 0 the 10am was 1, etc.
        var time = taskList.children().eq(i).children().eq(2).data('time') + 9;
        console.log(time)
        if (time < timeNow) {
            taskList.children().eq(i).children().eq(1).addClass('past');
        } else if (time == timeNow) {
            taskList.children().eq(i).children().eq(1).addClass('present');
        } else {
            taskList.children().eq(i).children().eq(1).addClass('future')
        }
    }
};

//Functions called on page load
load();
update();
//adding event listener to save button
saveBtn.on('click', save);
console.log(saveBtn);