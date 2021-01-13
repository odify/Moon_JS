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
var countDownDate = new Date("Dec 30, 2020 04:28:13").getTime();
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
var countDownDate1 = new Date("Jan 28, 2021 20:16:18").getTime();
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
var countDownDate2 = new Date("Feb 27, 2021 09:17:24").getTime();
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
var countDownDate3 = new Date("Mar 28, 2021 20:48:12").getTime();
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
//DATE 5
var countDownDate3 = new Date("Apr 27, 2021 05:31:36").getTime();
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


// Dienstag, 27. April 2021, 05:31:36 Uhr
// Mittwoch, 26. Mai 2021, 13:13:54 Uhr
// Donnerstag, 24. Juni 2021, 20:39:42 Uhr
// Samstag, 24. Juli 2021, 04:36:54 Uhr
// Sonntag, 22. August 2021, 14:02:00 Uhr
// Dienstag, 21. September 2021, 01:54:42 Uhr
// Mittwoch, 20. Oktober 2021, 16:56:42 Uhr
// Freitag, 19. November 2021, 09:57:30 Uhr
// Sonntag, 19. Dezember 2021, 05:35:36 Uhr


// 22:

// Dienstag, 18. Januar 2022, 00:48:30 Uhr
// Mittwoch, 16. Februar 2022, 17:56:30 Uhr
// Freitag, 18. März 2022, 08:17:36 Uhr
// Samstag, 16. April 2022, 20:55:06 Uhr
// Montag, 16. Mai 2022, 06:14:12 Uhr
// Dienstag, 14. Juni 2022, 13:51:48 Uhr
// Mittwoch, 13. Juli 2022, 20:37:42 Uhr
// Freitag, 12. August 2022, 03:35:48 Uhr
// Samstag, 10. September 2022, 11:59:06 Uhr
// Sonntag, 9. Oktober 2022, 22:55:00 Uhr
// Dienstag, 8. November 2022, 12:02:12 Uhr
// Donnerstag, 8. Dezember 2022, 05:08:12 Uhr

// 23:

// Samstag, 7. Januar 2023, 00:07:54 Uhr
// Sonntag, 5. Februar 2023, 19:28:36 Uhr
// Dienstag, 7. März 2023, 13:40:24 Uhr
// Donnerstag, 6. April 2023, 06:34:36 Uhr
// Freitag, 5. Mai 2023, 19:34:06 Uhr
// Sonntag, 4. Juni 2023, 05:41:48 Uhr
// Montag, 3. Juli 2023, 13:38:42 Uhr
// Dienstag, 1. August 2023, 20:31:42 Uhr
// Donnerstag, 31. August 2023, 03:35:42 Uhr
// Freitag, 29. September 2023, 11:57:36 Uhr
// Samstag, 28. Oktober 2023, 22:24:06 Uhr
// Montag, 27. November 2023, 10:16:24 Uhr
// Mittwoch, 27. Dezember 2023, 01:33:12 Uhr


// 24:

// Donnerstag, 25. Januar 2024, 18:54:00 Uhr
// Samstag, 24. Februar 2024, 13:30:24 Uhr
// Montag, 25. März 2024, 08:00:24 Uhr
// Mittwoch, 24. April 2024, 01:49:00 Uhr
// Donnerstag, 23. Mai 2024, 15:53:12 Uhr
// Samstag, 22. Juni 2024, 03:07:54 Uhr
// Sonntag, 21. Juli 2024, 12:17:12 Uhr
// Montag, 19. August 2024, 20:25:48 Uhr
// Mittwoch, 18. September 2024, 04:34:30 Uhr
// Donnerstag, 17. Oktober 2024, 13:26:24 Uhr
// Freitag, 15. November 2024, 22:28:36 Uhr
// Sonntag, 15. Dezember 2024, 10:01:42 Uhr
