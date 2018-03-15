window.onload = function init()
{

    window.setInterval(changeImg,3000);
    window.setTimeout(showAD,3000);
}
var i = 0;
function changeImg()
{
    i++;
    var img = document.getElementById("bannerImg");
    img.src = "../img/"+i+".jpg"
    if (i==3)
    {
        i=0;
    }
}
function  showAD()
{
    var img = document.getElementById("AdImg");
    var speed = 0;
    var timer =  window.setInterval(function ()
    {
        speed +=10;
        if(img.height<=300)
        {
            img.height = img.height+speed;
        }
        else
        {
            window.clearInterval(timer);
        }
    },5);
}
