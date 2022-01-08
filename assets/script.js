//setting global variables
var timeStamp = moment();
$("#timeStamp").text(timeStamp.format('MMMM Do YYYY'));
var saveBtn = $('.save-btn');
var taskList = $('.task-list')
//variable timeNow is the current time
//Needed to add HH format to check which specific hour it is (didn't work without formatting...)
var timeNow = moment().format('HH');
var taskList1 = document.querySelector('.tast-list1')
var taskList2 = $('.task-list2');
var taskList3 = $('.task-list3');
var taskList4 = $('.task-list4');
var taskList5 = $('.task-list5');
var taskList6 = $('.task-list6');
var taskList7 = $('.task-list7');
var taskList8 = $('.task-list8');
var taskList9 = $('.task-list9');
var saveBtn = $('.save-btn')
//WHY IS THE TEXT CONTENT IN A TEXT AREA CALLED NAME?!?!?! wHy ThO

//saving text content with Local storage
function save9am() {
    var text1 = tasklist1.value;
    localStorage.setItem('9am',JSON.stringify(text1))
}

function load9am() {
    text1.value = JSON.parse(localStorage.getItem('9am'))
}
//     localStorage.setItem('save1', JSON.stringify(taskList1));
//     localStorage.setItem('save2', JSON.stringify(taskList2));
//     localStorage.setItem('save3', JSON.stringify(taskList3));
//     localStorage.setItem('save4', JSON.stringify(taskList4));
//     localStorage.setItem('save5', JSON.stringify(taskList5));
//     localStorage.setItem('save6', JSON.stringify(taskList6));
//     localStorage.setItem('save7', JSON.stringify(taskList7));
//     localStorage.setItem('save8', JSON.stringify(taskList8));
//     localStorage.setItem('save9', JSON.stringify(taskList9));
// }
// var save = function() {
//     var textAreaValue = $(this).val();
//     console.log(textAreaValue)
//     // localStorage.setItem('content', textEl);
//     // console.log((localStorage.getItem('content'))
// }


//loading text to it's appropriate box with local storage


//updating time using moment and walking the dom using query
//setting variable time to check if each child using i is equal to the current time
function update() {
    for (let i = 0; i < 9; i++) {
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
get9am();
update();
//adding event listener to save button
saveBtn.on('click', save)