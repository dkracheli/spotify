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

function sortByDate() {
  let tours = document.getElementsByClassName("tournaments");
  console.log(tours);

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
