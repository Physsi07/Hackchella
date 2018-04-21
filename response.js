var settingOpen = false;

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
