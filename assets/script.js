//setting global variables
var timeStamp = moment();
$("#timeStamp").text(timeStamp.format('MMMM Do YYYY'));
var saveBtn = $('.save-btn');
var taskList = $('.task-list')
//variable timeNow is the current time
//Needed to add HH format to check which specific hour it is (didn't work without formatting...)
var timeNow = moment().format('HH');
var taskList1 = document.querySelector(".task-list1");
var taskList2 = document.querySelector(".task-list2");
var taskList3 = document.querySelector(".task-list3");
var taskList4 = document.querySelector(".task-list4");
var taskList5 = document.querySelector(".task-list5");
var taskList6 = document.querySelector(".task-list6");
var taskList7 = document.querySelector(".task-list7");
var taskList8 = document.querySelector(".task-list8");
var taskList9 = document.querySelector(".task-list9");
var saveBtn1 = document.querySelector(".save-btn1");
var saveBtn2 = document.querySelector(".save-btn2");
var saveBtn3 = document.querySelector(".save-btn3");
var saveBtn4 = document.querySelector(".save-btn4");
var saveBtn5 = document.querySelector(".save-btn5");
var saveBtn6 = document.querySelector(".save-btn6");
var saveBtn7 = document.querySelector(".save-btn7");
var saveBtn8 = document.querySelector(".save-btn8");
var saveBtn9 = document.querySelector(".save-btn9");
//WHY IS THE TEXT CONTENT IN A TEXT AREA CALLED NAME?!?!?! wHy ThO

//saving text content with Local storage
function save9am() {
    var text1 = taskList1.value;
    localStorage.setItem('9am',JSON.stringify(text1))
};

function load9am() {
    taskList1.value = JSON.parse(localStorage.getItem('9am'))
};

function save10am() {
    var text2 = taskList2.value;
    localStorage.setItem('10am',JSON.stringify(text2))
};

function load10am() {
    taskList2.value = JSON.parse(localStorage.getItem('10am'))
};

function save11am() {
    var text3 = taskList3.value;
    localStorage.setItem('11am',JSON.stringify(text3))
};

function load11am() {
    taskList3.value = JSON.parse(localStorage.getItem('11am'))
};

function save12pm() {
    var text4 = taskList4.value;
    localStorage.setItem('12pm',JSON.stringify(text4))
};

function load12pm() {
    taskList4.value = JSON.parse(localStorage.getItem('12pm'))
};

function save1pm() {
    var text5 = taskList5.value;
    localStorage.setItem('1pm',JSON.stringify(text5))
};

function load1pm() {
    taskList5.value = JSON.parse(localStorage.getItem('1pm'))
};

function save2pm() {
    var text6 = taskList6.value;
    localStorage.setItem('2pm',JSON.stringify(text6))
};

function load2pm() {
    taskList6.value = JSON.parse(localStorage.getItem('2pm'))
};

function save3pm() {
    var text7 = taskList7.value;
    localStorage.setItem('3pm',JSON.stringify(text7))
};

function load3pm() {
    taskList7.value = JSON.parse(localStorage.getItem('3pm'))
};

function save4pm() {
    var text8 = taskList8.value;
    localStorage.setItem('4pm',JSON.stringify(text8))
}

function load4pm() {
    taskList8.value = JSON.parse(localStorage.getItem('4pm'))
}

function save5pm() {
    var text9 = taskList9.value;
    localStorage.setItem('5pm',JSON.stringify(text9))
}

function load5pm() {
    taskList1.value = JSON.parse(localStorage.getItem('5pm'))
}
// var save = function() {
//     var textAreaValue = $(this).val();
//     console.log(textAreaValue)
//     // localStorage.setItem('content', textEl);
//     // console.log((localStorage.getItem('content'))
// }


//loading text to it's appropriate box with local storage
// function load() {
//     textArr = JSON.parse(localStorage.getItem('textArr')) || ["","","","","","","","",""];
//     for (let i = 0; i < 9; i++) {
//         taskList.children().eq(i).children().eq(1).text(textArr[i]);
// }};


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
load9am();
load10am();
load11am();
load12pm();
load1pm();
load2pm();
load3pm();
load4pm();
load5pm();
update();
//adding event listener to save button
saveBtn1.addEventListener('click', save9am)
saveBtn2.addEventListener('click', save10am)
saveBtn3.addEventListener('click', save11am)
saveBtn4.addEventListener('click', save12pm)
saveBtn5.addEventListener('click', save1pm)
saveBtn6.addEventListener('click', save2pm)
saveBtn7.addEventListener('click', save3pm)
saveBtn8.addEventListener('click', save4pm)
saveBtn9.addEventListener('click', save5pm)