window.onload = startTime;
function startTime()
{
 var today=new Date();
 var h=today.getHours();
 var m=today.getMinutes();
 var s=today.getSeconds();

 h=checkTime(h);
 m=checkTime(m);
 s=checkTime(s);
 document.getElementById('saat').innerHTML=h;
 document.getElementById('daka').innerHTML=m;
 document.getElementById('saniye').innerHTML=s;
 t=setTimeout('startTime()',1000);
}

function checkTime(i)
{
if (i<10)
 {
  i="0" + i;
 }
return i;
}