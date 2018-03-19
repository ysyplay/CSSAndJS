window.onload =function init()
{
    var table = document.getElementById("table");
    var length = table.tBodies[0].rows.length;
    for (var i =0;i<length;i++)
    {
        var tr = table.tBodies[0].rows[i];
        tr.index = i;
        tr.onmouseover = function ()
        {
            this.style.backgroundColor = "#78ade3";
        }
        if (i % 2 == 0)
        {
            tr.style.backgroundColor = "#e0e0e0";
            tr.onmouseout = function ()
            {
                this.style.backgroundColor = "#e0e0e0";
            }
        }
        else
        {
            tr.onmouseout = function ()
            {
                this.style.backgroundColor = "#ffffff";
            }
        }
    }

    var boxs = document.getElementsByTagName("input");
    for (var i=0;i<boxs.length;i++)
    {
        var box = boxs[i];
        if (box.id == "checkAll")
        {
            box.onclick = function()
            {
                checkAll(this);
            }
        }
        else
        {
            box.onclick = function()
            {
                checkOne(this);
            }
        }
    }
}
function checkAll(obj)
{
    var checkBox = obj;
    var boxs = document.getElementsByTagName("input");
    if(checkBox.checked)
    {
        for (var i=0;i<boxs.length;i++)
        {
            boxs[i].checked = true;
        }
    }
    else
    {
        for (var i=0;i<boxs.length;i++)
        {
            boxs[i].checked = false;
        }
    }
}
function checkOne(obj)
{
    if (!obj.checked)
    {
        document.getElementById("checkAll").checked = false;
    }
}
