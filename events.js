function showsep() {
    var x = document.getElementById("sepcalendar");

      document.getElementById("octcalendar").style.display = "none";
      document.getElementById("novcalendar").style.display = "none";
      document.getElementById("show2").style.transform = "rotate(0deg)";
      document.getElementById("show3").style.transform = "rotate(0deg)";
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("show1").style.transform = "rotate(0deg)";
    } else {
        x.style.display = "block";
        document.getElementById("show1").style.transform = "rotate(180deg)";

    }
  }
function showoct() {
    var x = document.getElementById("octcalendar");

      document.getElementById("sepcalendar").style.display = "none";
      document.getElementById("novcalendar").style.display = "none";
      document.getElementById("show1").style.transform = "rotate(0deg)";
      document.getElementById("show3").style.transform = "rotate(0deg)";

      if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("show2").style.transform = "rotate(0deg)";
      } else {
          x.style.display = "block";
          document.getElementById("show2").style.transform = "rotate(180deg)";
  
      }
    }
  function shownov() {
    var x = document.getElementById("novcalendar");

      document.getElementById("sepcalendar").style.display = "none";
      document.getElementById("octcalendar").style.display = "none";
      document.getElementById("show1").style.transform = "rotate(0deg)";
      document.getElementById("show2").style.transform = "rotate(0deg)";

      if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("show3").style.transform = "rotate(0deg)";
      } else {
          x.style.display = "block";
          document.getElementById("show3").style.transform = "rotate(180deg)";
  
      }
    }
 
  function show916() {
    var x = document.getElementById("descript916");
    var y= document.getElementById("default");
    document.getElementById("descript1012").style.display = "none";
    document.getElementById("descript1105").style.display = "none";

    if (x.style.display === "block") {
       x.style.display = "none";
        y.style.display = "block";
    } else {
      x.style.display = "block";
      y.style.display = "none";
    }
  } 
function show1012() {
    var x = document.getElementById("descript1012");
    var y= document.getElementById("default");
    document.getElementById("descript916").style.display = "none";
    document.getElementById("descript1105").style.display = "none"; 

    if (x.style.display === "block") {
      x.style.display = "none";
       y.style.display = "block";
   } else {
     x.style.display = "block";
     y.style.display = "none";
   }
  }
  function show1105() {
    var x = document.getElementById("descript1105");
    var y= document.getElementById("default");
    document.getElementById("descript916").style.display = "none";
    document.getElementById("descript1012").style.display = "none";

    if (x.style.display === "block") {
      x.style.display = "none";
       y.style.display = "block";
   } else {
     x.style.display = "block";
     y.style.display = "none";
   }
  }
