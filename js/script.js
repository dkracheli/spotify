var tournaments = [
  {
    state: "Registration",
    name: "National Tournament",
    number: "12",
    date: "01/12/2022",
    players: "16-18<br>women",
    progrss: "70",
  },
  {
    state: "progress",
    name: "Masters",
    number: "13",
    date: "03/12/2022",
    players: "18+<br>involved",
    progrss: "15",
  },
  {
    state: "Registration",
    name: "South Championship",
    number: "22",
    date: "01/14/2022",
    players: "16<br>women",
    progrss: "62",
  },
  {
    state: "Progress",
    name: "Winter Tournament",
    number: "12",
    date: "08/29/2022",
    players: "18<br>men",
    progrss: "84",
  },
  {
    state: "Registration",
    name: "ITF3",
    number: "12",
    date: "04/21/2022",
    players: "14<br>women",
    progrss: "80",
  },
  {
    state: "Finished",
    name: "Summer Tournament",
    number: "12",
    date: "05/29/2022",
    players: "14<br>men",
    progrss: "100",
  },
  {
    state: "Registration",
    name: "Grand Slam",
    number: "12",
    date: "06/03/2022",
    players: "12<br>women",
    progrss: "40",
  },
];

function addButtonValou(){
  let btnOpenReg = 0,progress = 0, Finished = 0;
  for(let i =0; i < tournaments.length;i++){
    if(tournaments[i].state =='Registration') btnOpenReg ++;
    if(tournaments[i].state =='progress') progress ++;
    if(tournaments[i].state =='Finished') Finished ++;
  }
  console.log(progress)
  document.getElementById("btnOpenReg").innerHTML = btnOpenReg
  document.getElementById("btnInProgress").innerHTML = progress
  document.getElementById("Finished").innerHTML = Finished
}

function createTour() {
  let container = document.getElementsByClassName("tournamentsContainer")[0];
  for (let i = 0; i < tournaments.length; i++) {
    let tournament = document.createElement("button");
    let figcaption = document.createElement("figcaption");
    
    tournament.classList.add("tournaments");
    tournament.classList.add(tournaments[i].state);
    tournament.innerHTML += `<a>${tournaments[i].name}</a>`;

    tournament.innerHTML += `<progress value=\"${tournaments[i].progrss}\" max=\"100\" class=\"proTournament\"></progress>`;
    let iconContainer = document.createElement("div");
    let figure = document.createElement("figure");
    figure.classList.add("iconOpen");
    iconContainer.classList.add("iconContainer");

    let img = document.createElement("img");
    img.src = "images/People.png";
    img.alt = "";
    figcaption.innerHTML = tournaments[i].number;
    figure.appendChild(img);
    figure.appendChild(figcaption);
    iconContainer.appendChild(figure);

    figure = document.createElement("figure");
    figure.classList.add("iconOpen");
    img = document.createElement("img");
    img.src = "images/Calrndar.png";
    img.alt = "";
    figcaption = document.createElement("figcaption");
    figcaption.innerHTML = tournaments[i].date;
    figure.appendChild(img);
    figure.appendChild(figcaption);
    iconContainer.appendChild(figure);

    figure = document.createElement("figure");
    figure.classList.add("iconOpen");
    img = document.createElement("img");
    img.src = "images/Category.png";
    img.alt = "";
    figcaption = document.createElement("figcaption");
    figcaption.innerHTML = tournaments[i].players;
    figure.appendChild(img);
    figure.appendChild(figcaption);

    iconContainer.appendChild(figure);
    tournament.appendChild(iconContainer);
    container.appendChild(tournament);
    if (tournaments[i].name != "ITF3"){
      tournament.setAttribute("onclick", "mainObjectOnclick()");
      }
      else if (tournaments[i].name==="ITF3")
      {tournament.setAttribute("onclick", "ITFOnclick()");}

  }
    filterSelection("all");
    addButtonValou();
  }


function createDate() {
  let container = document.getElementsByClassName("tournamentsContainer")[0];
  container.innerHTML = "";
  for (let i = 0; i < tournaments.length; i++) {
    tournaments[i].date = new Date(tournaments[i].date);
  }
}


function ITFOnclick() {
  document.location.href = "dashboard.html";
}

function newTourFunc() {
  document.location.href = "newTournament.html";
}

function mainObjectOnclick() {
  document.location.href = "mainObject.html";
}

function fillFields() {}

function editTour() {
  let wrapper = document.getElementById("readOnlyForm");
  let fields = wrapper.querySelectorAll(".readonlyBox");
  for (let i = 0; i < fields.length; i++) {
    fields[i].removeAttribute("readonly");
    fields[i].removeAttribute("disabled");
    fields[i].style.backgroundColor = "white";
  }
}

function save() {
  let wrapper = document.getElementById("readOnlyForm");
  let fields = wrapper.querySelectorAll(".readonlyBox");
  for (let i = 0; i < fields.length; i++) {
    fields[i].ariaReadOnly = true;
    fields[i].ariaDisabled = true;
    fields[i].style.backgroundColor = "#e5e5ea";
  }
}


function sortByDateasc() {
  createDate();
  tournaments = tournaments.sort((dateA, dateB) => dateA.date - dateB.date);
  for (let i = 0; i < tournaments.length; i++) {
    tournaments[i].date = tournaments[i].date.toLocaleDateString('en-US');
  }
  createTour();
}

function sortByDatedesc() {
  createDate();
  tournaments = tournaments.sort((dateA, dateB) => dateB.date - dateA.date);
  for (let i = 0; i < tournaments.length; i++) {
    tournaments[i].date = tournaments[i].date.toLocaleDateString('en-US');
  }
  createTour();
}

function filterFunction() {
  let input, filter, a, i;
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
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
  addactive();
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
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

//show only relevant fields in form
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
  fixStepIndicator(pageNum)
}
//navigation in form
function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    window.location.href = "index.html";
    // document.getElementById("regForm").submit();

  }
  showTab(currentTab);
}


//copy date and add 30 days to it
function setRegistration(dateV) {
  let reg = document.getElementById("regTour");
  let d = new Date(dateV);
  let c = new Date(d.setDate(d.getDate(dateV) - 30));
  reg.value = c.toLocaleDateString('en-GB');
  document.getElementById("imgReg").style.display = "block";
}

function editDateReg() {
  document.getElementById("regTour").removeAttribute("readonly");
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("stepper-item");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}


//allow only letters
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


function validateForm() {
  let Requireds, i, errorMsg, valid = true;
  tabShow = document.getElementsByClassName("tab")[currentTab];
  Requireds = tabShow.getElementsByClassName("Required");
  for (i = 0; i < Requireds.length; i++) {
    inputReq = Requireds[i].getElementsByTagName("input")[0];
    errorMsg = Requireds[i].getElementsByTagName("div")[0];
    if (inputReq.name == "nameTour")
      if (inputReq.value == "") {
        inputReq.className += " invalid";
        errorMsg.style.display = "block";
        valid = false;
      } else {
        inputReq.className -= " invalid";
        errorMsg.style.display = "none";
        nameT = inputReq.value;
      }
    if (inputReq.name == "dateTour")
      if (inputReq.value == "") {
        errorMsg.style.display = "block";
        inputReq.className += " invalid";
        valid = false;
      } else {
        errorMsg.style.display = "none";
        inputReq.className -= " invalid";
      }
    if (inputReq.name == "reward")
      if (inputReq.value < 100) {
        inputReq.className += " invalid";
        errorMsg.style.display = "block";
        valid = false;
      } else {
        inputReq.className -= " invalid";
        errorMsg.style.display = "none";
      }
  }
  return valid;
}

$(function () {
  $('[type="date"]').prop("min", function () {
    return new Date().toJSON().split("T")[0];
  });
});


