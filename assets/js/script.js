
var today = dayjs().format('dddd, MMMM D')

$('#todays-date').text(today);
  
workDay = [
  {
    "hour": 9,
    "display": "9am"
  },
  {
    "hour": 10,
    "display": "10am"
  },
  {
    "hour": 11,
    "display": "11am"
  },
  {
    "hour": 12,
    "display": "12pm"
  },
  {
    "hour": 13,
    "display": "1pm"
  },
  {
    "hour": 14,
    "display": "2pm"
  },
  {
    "hour": 15,
    "display": "3pm"
  },
  {
    "hour": 16,
    "display": "4pm"
  },
  {
    "hour": 17,
    "display": "5pm"
  }
];

function drawTimeBlock(timeblock){
  var currentTime = dayjs().hour();
  var scrooge;

  if (currentTime === timeblock.hour) {
    scrooge = "present";
  } else if (currentTime > timeblock.hour) {
    scrooge = "past";
  } else {
    scrooge = "future";
  }
  
  var taskId =`${timeblock.hour}-task`;
  var task = localStorage.getItem(taskId) || "";
  
  var html = $(`
  <div id="${timeblock.hour}" class="row time-block ${scrooge}">
      <div class="col-2 col-md-1 hour text-center py-3">${timeblock.display}</div>
      <textarea id="${taskId}" class="col-8 col-md-10 description" rows="3">
      ${task}
      </textarea>
      <button class="btn saveBtn col-2 col-md-1" 
      aria-label="save" onclick="saveTask('${taskId}')">
      <i class="fas fa-save" aria-hidden="true"></i>
      </button>
  </div>
  `);

  $("#schedule").append(html);
}
function generateWorkday () {
$("#schedule").empty();
for (let i = 0; i < workDay.length; i++) {
    drawTimeBlock(workDay[i]);
}
}

//takes the taskId from the onclick of the button as an input
function saveTask(localStorageKey) {
  var element = $(`#${localStorageKey}`);
  localStorage.setItem(`${localStorageKey}`, element.val())
}

generateWorkday();




