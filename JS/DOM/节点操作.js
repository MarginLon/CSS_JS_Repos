var btnList = document.querySelectorAll('button');
for (var i = 0; i < btnList.length; i++)
{
    btnList.myIndex = i;
    btnList[i].onclick = function () {
        alert(this.myIndex);
    }
}