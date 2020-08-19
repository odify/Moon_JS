//Just another JS code 4 simulating moonphases and dates



function load_moon_phases(obj,callback){


    var gets=[]


    for (var i in obj){



        gets.push(i + "=" +encodeURIComponent(obj[i]))
    }
    gets.push("LDZ=" + new Date(obj.year,obj.month-1,1) / 1000)
    var xmlhttp = new XMLHttpRequest()
    var url = "https://www.icalendar37.net/lunar/api/?" + gets.join("&")
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(JSON.parse(xmlhttp.responseText))
        }
    }
    xmlhttp.open("GET", url, true)
    xmlhttp.send()
}



function example_1(moon){    

    var day = new Date().getDate()
    var dayWeek=moon.phase[day].dayWeek


    var html = "<div>" +
    "<b>" + moon.nameDay[dayWeek]+ "</b>" +



    "<div>" + day + " <b>" + moon.monthName + "</b> " +

    moon.year + "</div>" +
    "<div shadow>" + moon.phase[day].svg + "</div>" +


    "<div>" + moon.phase[day].phaseName + " " +


    Math.round(moon.phase[day].lighting) + "%</div>" +
    "</div>"

    document.getElementById("ex1").innerHTML = html
}   
var configMoon = {
    lang  		:'de', 
    month 		:new Date().getMonth() + 1,
    year  		:new Date().getFullYear(),
    size		:150, 
    lightColor	:"#FFFFEE", 
    shadeColor	:"#001111", 
    texturize	:false, 
}
load_moon_phases(configMoon,example_1)

//DATE 1
var countDownDate = new Date("Sep 2, 2020 07:22:04").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("nm1").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("nm1").innerHTML = "EXPIRED";
  }
}, 1000 );
//DATE 2
var countDownDate1 = new Date("Oct 1, 2020 23:05:15").getTime();
var x = setInterval(function() {
  var now1 = new Date().getTime();
  var distance1 = countDownDate1 - now1;
  var days = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance1 % (1000 * 60)) / 1000);
  document.getElementById("nm2").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance1 < 0) {
    clearInterval(x);
    document.getElementById("nm2").innerHTML = "EXPIRED";
  }
}, 1000 );
//DATE 3
var countDownDate2 = new Date("Oct 31, 2020 15:49:15").getTime();
var x = setInterval(function() {
  var now2 = new Date().getTime();
  var distance2 = countDownDate2 - now2;
  var days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance2 % (1000 * 60)) / 1000);
  document.getElementById("nm3").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance2 < 0) {
    clearInterval(x);
    document.getElementById("nm3").innerHTML = "EXPIRED";
  }
}, 1000 );
//DATE 4
var countDownDate3 = new Date("Nov 30, 2020 10:29:41").getTime();
var x = setInterval(function() {
  var now3 = new Date().getTime();
  var distance3 = countDownDate3 - now3;
  var days = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance3 % (1000 * 60)) / 1000);
  document.getElementById("nm4").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance3 < 0) {
    clearInterval(x);
    document.getElementById("nm4").innerHTML = "EXPIRED";
  }
}, 1000 );
//DATE 4
var countDownDate3 = new Date("Dec 30, 2020 04:28:13").getTime();
var x = setInterval(function() {
  var now4 = new Date().getTime();
  var distance4 = countDownDate4 - now4;
  var days = Math.floor(distance4 / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance4 % (1000 * 60)) / 1000);
  document.getElementById("nm5").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance4 < 0) {
    clearInterval(x);
    document.getElementById("nm5").innerHTML = "EXPIRED";
  }
}, 1000 );

// 2021

// Donnerstag, 28. Januar 2021, 20:16:18 Uhr
// Samstag, 27. Februar 2021, 09:17:24 Uhr
// Sonntag, 28. März 2021, 20:48:12 Uhr
// Dienstag, 27. April 2021, 05:31:36 Uhr
// Mittwoch, 26. Mai 2021, 13:13:54 Uhr
// Donnerstag, 24. Juni 2021, 20:39:42 Uhr
// Samstag, 24. Juli 2021, 04:36:54 Uhr
// Sonntag, 22. August 2021, 14:02:00 Uhr
// Dienstag, 21. September 2021, 01:54:42 Uhr
// Mittwoch, 20. Oktober 2021, 16:56:42 Uhr
// Freitag, 19. November 2021, 09:57:30 Uhr
// Sonntag, 19. Dezember 2021, 05:35:36 Uhr
