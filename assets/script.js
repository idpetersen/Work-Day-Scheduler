//setting global variables
var timeStamp = moment();
$("#timeStamp").text(timeStamp.format('MMMM Do YYYY'));
var saveBtn = $('.save-btn');
var taskList = $('.task-list')
//variable timeNow is the current time
//Needed to add HH format to check which specific hour it is (didn't work without formatting...)
var timeNow = moment().format('HH');
var taskList1 = $('.task-list1');
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
function save(event){
    event.preventDefault();
    localStorage.setItem('save1', taskList1);
    localStorage.setItem('save2', taskList2);
    localStorage.setItem('save3', taskList3);
    localStorage.setItem('save4', taskList4);
    localStorage.setItem('save5', taskList5);
    localStorage.setItem('save6', taskList6);
    localStorage.setItem('save7', taskList7);
    localStorage.setItem('save8', taskList8);
    localStorage.setItem('save9', taskList9);
}
// var save = function() {
//     var textAreaValue = $(this).val();
//     console.log(textAreaValue)
//     // localStorage.setItem('content', textEl);
//     // console.log((localStorage.getItem('content'))
// }


//loading text to it's appropriate box with local storage
function load() {
    localStorage.getItem('save1')
    localStorage.getItem('save2')
    localStorage.getItem('save3')
    localStorage.getItem('save4')
    localStorage.getItem('save5')
    localStorage.getItem('save6')
    localStorage.getItem('save7')
    localStorage.getItem('save8')
    localStorage.getItem('save9')
};


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
load();
update();
//adding event listener to save button
saveBtn.on('click', save)