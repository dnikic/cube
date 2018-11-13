//All the custom javascript for this website is in this .js file, jquery adn bootstrap functions may be requiered, so they are loaded into the html beafore this script
//AI36-2014 Nikic Danilo


//Login feature functionsSTART

function setCookie(cname, cvalue, exdays)
{
var d = new Date();
d.setTime(d.getTime() + (exdays*24*60*60*1000));

var expires = "expires="+d.toUTCString();

document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=;path=/";
}


function getCookie(cname)
{
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i = 0; i < ca.length; i++)
  {
  var c = ca[i];
    while(c.charAt(0) == ' ')
    {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0)
    {
    return c.substring(name.length, c.length);
    }
  }
  return "";
}


$(document).ready(function(){
	
	if(getCookie("usrname")!=="")
	{
	  $("#logInButton").hide();
	  $("#logOutButton").text("logout " + getCookie("usrname"));
	}
	else
	{
	  $("#logOutButton").hide();
	}

	$("#loginDataClose").click(function()
  {
	  if(($("#usrname").val()==="admin") && ($("#psw").val()==="admin"))
	  {
		setCookie("usrname", "admin", 5);
		$("#logInButton").hide();
		$("#logOutButton").show();
		$("logOutButton").text("logout " + getCookie("usrname"));
	  };
	});
	$("#logOutButton").click(function(){
		  $("#logOutButton").hide();
		  $("#logInButton").show();
		  setCookie("usrname", "", 5);
		}
	);
});
//Login feature functionsEND



//ImageModalSTART
// Get the modal
$(document).ready(function(){
var modal = document.getElementById('myIMGModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
//ImageModalEND
});


//Image FlipingSTART
$(document).ready(function(){

  (function() {     // function expression closure to contain variables
    var i = 0;
    var pics = [ "./advertisement/mtelBox.png", "./advertisement/pyramidShop.png" ];
    var el = document.getElementById('img_to_flip');  // el doesn't change
    function toggle() {
        el.src = pics[i];           // set the image
        i = (i + 1) % pics.length;  // update the counter
    }
    setInterval(toggle, 2000);
})();             // invoke the function expression

});


function myFunction() {
   alert("londonclock1922.com delivers curent time info: " + startTime() + " ");}

function startTime(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds(); 
  return [ h, m, s ].join(':')
}



//Image FlipingSEnd


//fading pictures steam giveawaySTART

    $("#fade").click(function(){
        $("#fadediv1").fadeIn(1000);
        $("#fadediv2").fadeIn(2000);
        $("#fadediv3").fadeIn(2500);
    });



$(document).ready(function(){
    $(".destructable").click(function(){
        $(this).hide();
});
});

//fading pictures steam giveawayEND

//sketch drawing

  $(function() {
    $('#tools_sketch').sketch({defaultColor: "#ff0"});
  });


