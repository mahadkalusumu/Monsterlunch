var today = new Date();
let formatedToday = getFormatedDate(today);
let tmpSize;

let happyMonster = [
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2FSka%CC%88rmavbild%202020-11-13%20kl.%2018.00.37.png?v=1605286855738", //0. Will never be able to get here
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2FSka%CC%88rmavbild%202020-11-09%20kl.%2018.15.19.png?v=1604944019086", //1. Will never be able to get here
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2F1-2.gif?v=1605392285906", //2
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2F2-3.gif?v=1605392279158", //3
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2F3-4.gif?v=1605392270079", //4
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2F4-5.gif?v=1605392258572", //5
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2F5-6.gif?v=1605392250805", //6
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2F6-7.gif?v=1605392242456", //7
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2F7-8.gif?v=1605391960099", //8
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2F8-9.gif?v=1605391953092", //9
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2Ffull.gif?v=1605516824979" //,win11
];

//let newHappymonster = happymonster.map(function (num){
//return num + 1;
//console.logg(newHappymonster);
//});

let sadMonster = [
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2Fdead.gif?v=1605516804925", //dead (0)
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2F2-1.gif?v=1605392286187", //1
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2F3-2.gif?v=1605392277999", //2
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2F4-3.gif?v=1605392263288", //3
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2F5-4.gif?v=1605392254469", //4
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2F6-5.gif?v=1605392244039", //5
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2F7-6.gif?v=1605392241736", //6
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2F8-7.gif?v=1605391953299", //7
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2F9-8.gif?v=1605391932989", //8
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2FSka%CC%88rmavbild%202020-11-09%20kl.%2018.43.30.png?v=1604944434312", //9 Will never be able to get here
  "https://cdn.glitch.com/85449d58-0626-4a7c-b722-78f488f0484d%2FSka%CC%88rmavbild%202020-11-13%20kl.%2017.49.25.png?v=1605286184341" //10 Will never be able to get here
];
//Sets and gets initial information and our start value in array
function initialize() {
  let size = window.localStorage.getItem("size");
  let endDate = window.localStorage.getItem("endDate"); //sätter endDate (en variabel med namn endDate) till "endDate", "endDate" har hämtats från local Storage och är ett keyword

  if (size === null || new Date(endDate).getTime() <= Date.now()) {
    window.localStorage.setItem("size", parseInt(happyMonster.length / 2)); //size är keyword
    window.localStorage.setItem("dates", ""); //dates är keyword
    window.localStorage.setItem("isHappy", "yes"); //isHappy är keyword
    window.localStorage.setItem("endDate", ""); //endDate är keyword
  }
  size = window.localStorage.getItem("size");

  tmpSize = parseInt(size); //sätter tmpSize = size, parseInt gör size till integer (den rundar även ner till närmsta heltal)
  let gapDay = getGapDay(); //sätter gapDay = funtionen getGapDay()
  if (gapDay > 0) {
    //om gapDay är större än 0, händer:
    window.localStorage.setItem("isHappy", "no"); //vi sparar isHappy till no i local storage, varför?? keywords
    tmpSize -= gapDay; // sätter tmpSize = tmpSize - gapDay, alltså storleken på monster minskar med antal dagar som en varit inaktiv (inte tryck på en knapp)
  }
  if (tmpSize < 0) {
    //om tmpSize är mindre än 0, händer:
    tmpSize = 0; //tmpsize = 0, ser till så att tmpSize inte kan bli minus, säkerhetsgrej?? eftersom det tekniskt sätt inte kan gå mer än 5 dagar (alltså 5 steg)
  }

  let isHappy = window.localStorage.getItem("isHappy"); // hämtar "isHappy" från local storage och sätter det (=) till variabeln isHappy, keyword
  let imageElement = document.querySelector(".monster"); // hämtar platsen där klassen monster finns i HTML, vilket är en img plats (vår plats för vår bild (aka arrays))

  if (isHappy === "yes") {
    //om isHappy är = "yes", (detta ser en i application i insoectorn)
    imageElement.src = happyMonster[tmpSize]; //hämta bilden från platsen som tmpSize är (alltså en siffra) i arrayen happyMonster. om tmpSize = 3, hämtar bild 4
  } else {
    imageElement.src = sadMonster[tmpSize]; //annars sker samma fast i sadMonster
  }

  if (endDate === formatedToday) {
    // reset on enddate
    //you see it in the console but it dosent reset to:
    window.localStorage.setItem("size", parseInt(happyMonster.length / 2));
    window.localStorage.setItem("dates", "");
    window.localStorage.setItem("isHappy", "yes");
    window.localStorage.setItem("endDate", "");
    //these 4 rows are the same as the ones in inizialiser
    console.log("reset");
  }
}
function getGapDay() {
  // a function named getGapDay
  let lastClickDate = localStorage.getItem("dates"); // let the variable with the name lastClickDate be "dates", which you get from the local storage
  if (lastClickDate == "") {
    //if this variable is an empty string ("")
    return 0; // we will get 0, why do we want this??
  }
  lastClickDate = new Date(lastClickDate); // create a new date to lastClickDate ("dates"), with the parameter lastClickDate <-- DANNE
  let todayDate = new Date(formatedToday); // set a vaiable with the name todayDate with a new Date with the parameter formatedToday
  let gap = (todayDate - lastClickDate) / 86400000; //set a vaiable with the name gap to todayDate minus lastClickDate, you get the date into one number by dividing it with the number of milliseconds per day
  gap -= 1; // set gap = gap - 1, why minus 1??
  return gap; // we get gap
}

//var i;
//for (i = 0; i < happyMonster.length; i++) {
//for (begin; condition; step){
//console.log(happymonster[i]); //... loop body ..
//}

let yesBtn = document.getElementById("yes"); //get the space ( in this case a space for a button, or a button function) from html
yesBtn.addEventListener("click", handleClick); // listen for an event, in this case the event is "click", with the vaule handleClick (which is a function)

let noBtn = document.getElementById("no"); // same as above but with the ID "no"
noBtn.addEventListener("click", handleClick); // ---=---

function hideButtons(dates) {
  //function with the name hideButtons with the parameter dates, in this function we decide that:
  if (dates === formatedToday) {
    //if dates is the same as formatedToday, (if these dates are the same)
    yesBtn.style.visibility = "hidden"; // yes and no button will dissaper
    noBtn.style.visibility = "hidden";
  } else {
    yesBtn.style.display = "inline-block"; //some design thing?
    noBtn.style.display = "inline-block";
  }
}

function calculateWinner() {
  // this is a function that weve named calculateWinner
  let isHappy = window.localStorage.getItem("isHappy"); // let a variable with the name isHappy which get the keyword isHappy
  if (tmpSize == 10 && isHappy === "yes") {
    // if tmpSize equals 10 aka the highest number of the space in the happyMonster array and isHappy is yes
    //you won the game
    console.log("You won the game"); // this you will se in the console log if this is true (happens)
    // everything restarts:
    window.localStorage.setItem("size", parseInt(happyMonster.length / 2)); // resets the array value?
    window.localStorage.setItem("dates", ""); //what does the empty array mean?
    window.localStorage.setItem("isHappy", "yes");
    window.localStorage.setItem("endDate", "");
  }
  if (tmpSize == 0 && isHappy == "no") {
    // here the monster is dead, and we will reset
    //you lost the game
    window.localStorage.setItem("size", parseInt(happyMonster.length / 2));
    window.localStorage.setItem("dates", "");
    window.localStorage.setItem("isHappy", "yes");
    window.localStorage.setItem("endDate", "");

    console.log("You lost the game");
  }
}

function clickCount() {
  let count = localStorage.getItem("clickCount"); // Get clickCount from localstorage
  if (count) {
    // If count exists add 1
    count = parseInt(count) + 1; // parseInt transform a string into a number
  } else {
    // Else set count to 1
    count = 1;
  }

  //localStorage.setItem("clickCount", count);

  //console.log("counting", count);
  //if (count == 5) {
    //console.log("counted to five");
    //window.localStorage.removeItem("clickCount"); // Remove item during reset
    //window.localStorage.setItem("size", parseInt(happyMonster.length / 2));
    //window.localStorage.setItem("dates", "");
    //window.localStorage.setItem("isHappy", "yes");
    //window.localStorage.setItem("endDate", "");
  //}
}

function handleClick() {
  //get stuff: see above
  let imageElement = document.querySelector(".monster");
  let dates = window.localStorage.getItem("dates");

  window.localStorage.setItem("dates", formatedToday); // set the keyword "dates" to the value of the formatedTOday variable

  hideButtons(formatedToday); // activates the hideButton(with the parameter formatedToday) within this function
  let endDate = window.localStorage.getItem("endDate"); //get from localStorage
  if (endDate == "") {
    //if endDate is an empty string:
    let endDate = today.setDate(today.getDate() + 5); //
    endDate = new Date(endDate); // Convert from unix timestamp to datetime format
    endDate = getFormatedDate(endDate);
    window.localStorage.setItem("endDate", endDate);
  }
  if (event.target == yesBtn) {
    window.localStorage.setItem("isHappy", "yes");

    tmpSize += 1;
    //  size = size - x
    // Make monster happy

    imageElement.src = happyMonster[tmpSize];
    window.localStorage.setItem("size", tmpSize);
  } else if (event.target == noBtn) {
    window.localStorage.setItem("isHappy", "no");
    tmpSize -= 1;
    //Make monster sad

    imageElement.src = sadMonster[tmpSize];
    window.localStorage.setItem("size", tmpSize);
  }
  //clickCount();
  calculateWinner();
}

function getFormatedDate(date) {
  // Converts a datetime object to a string of the date(ex: "2020-10-11")
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
}

function finalAlert() {
  let count = localStorage.getItem("clickCount"); // REMOVE LATER ONLY FOR DEMO
  let endDate = window.localStorage.getItem("endDate");
  if (endDate === formatedToday && event.target == yesBtn) {
    alert("Thank you for keeping me alive and happy");
  } else if (endDate === formatedToday && event.target == noBtn) {
    alert("Im sad and hungry, see you next week :(");
  }  //else if (count == 5 && event.target == yesBtn) { // REMOVE LATER ONLY FOR DEMO
    //alert("Thank you for keeping me alive and happy"); // REMOVE LATER ONLY FOR DEMO
  //} else if (count == 5 && event.target == noBtn) { // REMOVE LATER ONLY FOR DEMO
    //alert("Im sad and hungry, see you next week :("); // REMOVE LATER ONLY FOR DEMO
  //}
}

function checkClick() {
  var timeMilliseconds = today.getTime();
  let imageElement = document.querySelector(".monster");
  let size = localStorage.getItem("size");
  let todayTime = today;
  todayTime.setHours(16, 46, 40);

  if (msToTime(timeMilliseconds) === "23:59" && today !== formatedToday) {
    size -= 1;
    console.log(size);
    window.localStorage.setItem("size", size);
    window.localStorage.setItem("isHappy", "no");
    imageElement.src = happyMonster[size];
  }
}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes;
}

// setInterval(checkClick, 50000);
// var timeMilliseconds = today.getTime();

initialize();

//let isHappy = window.localStorage.getItem("isHappy");
// if (event.target == noBtn) && (event.target == yesBtn)

//handleClick(); //faAKTIVERA DEN HÄR NÄR NI ÄR KLARA SÅ ATT HEMSIDAN UPPDATERAR AUTOMATISKT

//document.queryselector(yesOrno).addeventlistener("click",)(event.target)
// console.log()

//loop through array

//mov, mp4, apg jpeg

// Every day you dont klick, it decreases in size
//if (handleClick dont happen){

//let imageElement = document.querySelector(".monster");
//let size = window.localStorage.getItem("size");
//size = parseInt(size);
//let dates = window.localStorage.getItem("dates");
//window.localStorage.setItem("dates", today);

//window.localStorage.setItem("isHappy", "no");
//size = size - 1;

//  hideButtons(dates);

//function gapDay() {
// let size = window.localStorage.getItem("size");
// let isHappy = window.localStorage.getItem("isHappy");
//let imageElement = document.querySelector(".monster");
/*


if(yesterday === formatedToday -1)



if (isHappy == "yes" || isHappy == "no" ) {
 window.localStorage.setItem("isHappy", "no");
   size = size - 1;
   imageElement.src = sadMonster[size];
   window.localStorage.setItem("size", size);
    console.log("Gap Day");
}
}

*/
