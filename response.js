var settingOpen = false;

$(document).ready(function()
{
    chatInput = document.getElementById("chatInput");
    chatInput.addEventListener("keyup", function(e)
    {
        e.preventDefault();
        if(e.keyCode == 13)
            sendMessage();
    });
})


function displayHideSettings()
{
    if(settingOpen)
    {
        var div = $("#settingChat");
        var btn = $(".settingsButton");
        div.animate( {width: "0px"} , 200 );
        div.hide();
        settingOpen = false;
        console.log("close");
    }
    else
    {
        var div = $("#settingChat");
        var btn = $(".settingsButton");
        div.animate( {width: "20%"} , 200 );
        div.show();
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
