var settingOpen = false;
var menuOpened = false;

$(document).ready(function()
{
    var chat = document.getElementsByClassName("chatMessages")[0];
    chat.scrollTop = chat.scrollHeight;
    chatInput = document.getElementById("chatInput");
    chatInput.addEventListener("keyup", function(e)
    {
        e.preventDefault();
        if(e.keyCode == 13)
            sendMessage();
    });

    document.addEventListener("contextmenu", function(e)
   {
       e.preventDefault();

       var isClickable = isElement(e, "chatBubbleSender");

       if(isClickable)
       {
           rightMenuOn();
           posMenu(e);
       }
       else
       {
           isClickable = null;
           rightMenuOff();
       }
   });

   document.addEventListener("click", function(e)
   {
       var isClickable = isElement(e, "context-item");

       if(isClickable)
       {
           e.preventDefault();

       }
       else
       {
           var button = e.which || e.button;

           if(button == 1)
               rightMenuOff();
       }
   });

   window.onmousemove = function(e)
   {
       if(isElement(e, "context-menu"))
        return;
       rightMenuOff();
   }

   window.onkeyup = function(e)
   {
       if(e.keyCode == 27)
           rightMenuOff();
   }

   window.onresize = function(e)
   {
       rightMenuOff();
   }
})


function displayHideSettings()
{
    if(settingOpen)
    {
        var div = $("#settingChat");
        var btn = $(".settingsButton");
        div.animate( {width: "0", opacity: 0, display: false} , 200 );
        settingOpen = false;
        console.log("close");
    }
    else
    {
        var div = $("#settingChat");
        var btn = $(".settingsButton");
        div.animate( {width: "20%", opacity: 1} , 200 );
        settingOpen = true;
        console.log("open");
    }
}

function sendMessage()
{
    if($("#chatInput").val() != "")
    {
        var chat = document.getElementsByClassName("chatMessages")[0];
        var field = document.getElementsByClassName("messageField")[0];
        var msg= document.createElement("div");
        msg.setAttribute("class", "chatBubbleSender");
        msg.innerText = $("#chatInput").val();
        $(msg).css("opacity", 0);
        field.appendChild(msg);
        $(chat).animate({scrollTop: $(chat).prop("scrollHeight")}, 500);
        $(msg).animate({opacity: 1}, 500);
        $("#chatInput").val("");
    }
}

function receiveMessage()
{
    if($("#chatInput").val() != "")
    {
        var chat = document.getElementsByClassName("chatMessages")[0];
        var field = document.getElementsByClassName("messageField")[0];
        var msg= document.createElement("div");
        msg.setAttribute("class", "chatBubbleRecipient");
        msg.innerText = $("#chatInput").val();
        $(msg).css("opacity", 0);
        field.appendChild(msg);
        $(chat).animate({scrollTop: $(chat).prop("scrollHeight")}, 500);
        $(msg).animate({opacity: 1}, 500);
        $("#chatInput").val("");
    }
}

function isElement(e, className)
{
   var el = e.srcElement || e.target;

   if ( el.classList.contains(className) )
     return el;
   else
   {
     while (el = el.parentNode)
       if (el.classList && el.classList.contains(className))
         return el;
   }

   return false;
}

function rightMenuOn()
{
   if(!menuOpened)
   {
       menuOpened = true;
       $(".context-menu").addClass("context-active");
       // #A13085
   }
}

function rightMenuOff()
{
   if(menuOpened)
   {
       menuOpened = false;
       $(".context-menu").removeClass("context-active");
   }
}

function posMenu(el)
{
   var menu = document.getElementsByClassName("context-menu")[0];
   console.log("X Position: " +  el.pageX);
   console.log("Y position: " + el.pageY);
   // menu.style.left = el.clientX - $(".messageField")[0].offsetLeft;
   // menu.style.top = el.clientY - $(".messageField")[0].offsetRight;
   menu.style.left = el.pageX + "px";
   menu.style.top = el.pageY + "px";
   console.log(menu.style.left);
}
