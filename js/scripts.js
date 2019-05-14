// made by Will Bollock
// jquery function: credit https://jsfiddle.net/7Lfv0jqL/
$('#mode').change(function(){   
    
    if ($(this).prop('checked'))
    {
        $('body').addClass('dark-mode');
    }
    else
    {
        $('body').removeClass('dark-mode');
    }
    
});
// display last modified date
var lm = document.lastModified;
document.getElementById("lastModified").innerHTML = lm;

//sticky nav bar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

