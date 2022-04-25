var tournaments = [
{
  state: 'Registration',
  name: 'Winter Tournament',
  number:'12',
  date: '01/12/2022',
  players: '16-18<br>women'
},
// {
//   state: 'progress',
//   name: 'Winter Tournament',
//   number:'13',
//   date: '03/12/2022',
//   players: '18+<br>men'
// },
{
  state: 'Registration',
  name: 'Winter Tournament',
  number:'22',
  date: '01/14/2022',
  players: '16<br>women'
},
{
  state: 'Finished',
  name: 'Winter Tournament',
  number:'12',
  date: '08/29/2022',
  players: '14 men'
},
{
  state: 'Registration',
  name: 'Winter Tournament',
  number:'12',
  date: '04/21/2022',
  players: '12-14<br>women'
},
{
  state: 'Finished',
  name: 'Winter Tournament',
  number:'12',
  date: '05/29/2022',
  players: '14<br>men'
},
{
  state: 'Registration',
  name: 'Winter Tournament',
  number:'12',
  date: '06/03/2022',
  players: '12<br>women'
},
];


function createTour () {
  let container = document.getElementsByClassName("tournamentsContainer")[0];

  for (let i=0;i<tournaments.length;i++){
    let tournament = document.createElement("button");
    let figcaption = document.createElement("figcaption");

    tournament.classList.add("tournaments");
    tournament.classList.add(tournaments[i].state);
    tournament.innerHTML+= tournaments[i].name;

    tournament.innerHTML+="<progress value=\"75\" max=\"100\" class=\"proTournament\"></progress>";
    let iconContainer = document.createElement("div");
    let figure = document.createElement("figure");
    figure.classList.add("iconOpen");
    iconContainer.classList.add("iconContainer");
    
    let img = document.createElement("img");
    img.src="images/People.png";
    img.alt="";
    figcaption.innerHTML = tournaments[i].number;
    figure.appendChild(img);
    figure.appendChild(figcaption);
    iconContainer.appendChild(figure);

    figure = document.createElement("figure");
    figure.classList.add("iconOpen");
    img = document.createElement("img");
    img.src="images/Calrndar.png";
    img.alt="";
    figcaption = document.createElement("figcaption");
    figcaption.innerHTML = tournaments[i].date;
    figure.appendChild(img);
    figure.appendChild(figcaption);
    iconContainer.appendChild(figure);

    figure = document.createElement("figure");
    figure.classList.add("iconOpen");
    img = document.createElement("img");
    img.src="images/Category.png";
    img.alt="";
    figcaption = document.createElement("figcaption");
    figcaption.innerHTML = tournaments[i].players;
    figure.appendChild(img);
    figure.appendChild(figcaption);

    iconContainer.appendChild(figure);
    tournament.appendChild(iconContainer);
    container.appendChild(tournament);
    filterSelection('all');
  }
}

function createDate() {
  let container = document.getElementsByClassName("tournamentsContainer")[0];
  container.innerHTML="";
  for (let i=0; i<tournaments.length;i++){
    tournaments[i].date = new Date(tournaments[i].date);
  }
}

function sortByDateasc () {
createDate();

  tournaments = tournaments.sort((dateA, dateB) => dateA.date - dateB.date);
  for (let i=0; i<tournaments.length;i++){
    tournaments[i].date = tournaments[i].date.toLocaleDateString('en-US');
  }
   createTour();
}

function sortByDatedesc () {
  createDate();
    tournaments = tournaments.sort((dateA, dateB) => dateB.date - dateA.date);
    for (let i=0; i<tournaments.length;i++){
      tournaments[i].date = tournaments[i].date.toLocaleDateString('en-US');
    }
    createTour();
  }

function filterFunction() {
  let input, filter, ul, li, a, i;
  input = document.getElementById("RefereeSearch");
  filter = input.value.toUpperCase();
  div = document.getElementsByClassName("dropdown-menu")[3];
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("tournaments");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
  addactive();
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}



function addactive() {
  var btnContainer = document.getElementById("mainBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("selected");
      if (current.length > 1) {
        current[1].className = current[1].className.replace("selected", "");
      }
      this.className += " selected";
    });
  }
}



let currentTab = 0;

//מראה את השדות הרלוונטים בטופס
function showTab(pageNum) {
  var x = document.getElementsByClassName("tab");
  x[pageNum].style.display = "grid";
  if (pageNum == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (pageNum == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
}
// ניווט בטופס
function nextPrev(pageNum) {
  var x = document.getElementsByClassName("tab");
  if (pageNum == 1 || pageNum == -1) {
    x[currentTab].style.display = "none";
  }
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  currentTab = currentTab + pageNum;
  showTab(currentTab);
}
// מעתיק את התאריך ומוסיף 30 יום
function setRegistration(dateV) {
  let reg = document.getElementById("regTour");
  let d = new Date(dateV);
  let c = new Date(d.setDate(d.getDate(dateV) + 30));
  reg.value = c.toLocaleDateString('en-GB');
  document.getElementById("imgReg").style.display = "block";
}

function editDateReg() {
  document.getElementById("regTour").removeAttribute("readonly");
}


//אפשר להכניס "שם יוצר הטופס" רק אותיות
$(function () {
  $('#nameOfman').keydown(function (e) {
    if (e.shiftKey || e.ctrlKey || e.altKey) {
      e.preventDefault();
    } else {
      var key = e.keyCode;
      if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
        e.preventDefault();
      }
    }
  });
});

function CustomNotification(choise) {
  if (choise == "custom") {
    $(document).ready(function () {
      $("#Notification").hide();
      $("#CustomNotif").show();
    });
  }
}
