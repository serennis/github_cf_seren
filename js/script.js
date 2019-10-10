// console. log ("Welcome to my portfolio!")
// function menuToggle() {
  // var x = document.getElementById("mynavtoggle");
  // if (x.className === "navtoggle")
  // else {
  //  x.className = "navtoggle";
  //}

  // Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
  function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }
