$("#covideo").click( function (){
    if( $("#bgvid").prop('muted') )
    {
      $("#bgvid").prop('muted', false);
    }

    else {
      $("#bgvid").prop('muted', true);
    }

  });
var myIndex = 0;

	window.onload = function slideShow() {
    var i;
    var x = document.getElementsByClassName("section-one");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(slideShow, 5000);    
	}

$(document).ready(function(){

});
