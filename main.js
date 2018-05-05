$(document).ready(function() {
  var ad = document.getElementById('ad');
  var x = document.getElementById('Prva');
  var y = document.getElementById('Druga');
  var f = document.getElementById('poeni')
  var n;
  var l;
  var m = 0;
  var bodovi = 100;
  var pobednik = document.getElementById("Winer");
  f.innerHTML = "You have 100 points";
  var p;
  var h;
  var ulog = 5;
  $('.dugme').click(function() {
    vreme();
  });

  function PromenaPrve() {
    if (bodovi <= 0) {
      //pobednik.innerHTML = "<h1>Game over</h1>";
    } else {
      p = Math.floor((Math.random() * 7) + 1);
      //ovde menjam da slika bude 4
      var DrugaSlika = "images/" + p + ".jpg";
      var z = x.setAttribute("src", DrugaSlika);
      h = Math.floor((Math.random() * 7) + 1);
      // i ovde
      var luka = "images/" + h + ".jpg";
      var g = y.setAttribute("src", luka);
      pobednik.innerHTML = ""
      m = m + 1;
      console.log(m);
      if (m == 7) {
        clearTimeout(n);
        provera();
        m = 0
      } else {
        vreme();
      }
    }
  }

  function vreme() {
    n = setTimeout(PromenaPrve, 200);
  }


  function oduzimanje() {
    bodovi = bodovi - ulog;
    console.log(bodovi);
    var ovocedapise = "You have " + bodovi + " points";
    f.innerHTML = ovocedapise;
    if (bodovi == 0) {
      //$(".dugme").hide();
      //$(".dugme").show().text("Game over");
      $(".dugme").hide().text("GAME OVER").fadeIn("slow");
    }
    ulog = 5;
    $("#trenutna").text(ulog);
  }

  function provera() {
    var prva = x.getAttribute("src");
    var druga = y.getAttribute("src");
    console.log(prva);
    console.log(druga);
    if (prva == druga) {
      //  pobednik.innerHTML = "You are the winer";
      if (p == 4) {
        kraj();
      } else {

        $("#Winer").text("You are the winer").animate({
          fontSize: "7em"
        });
        $("#Winer").animate({
          fontSize: "2.3em"
        });
        ad.play();
        bodovi = bodovi + ulog * 5;
        oduzimanje();
      }
    } else {
      oduzimanje();
    }


  };

  function kraj() {
    bodovi = 5;
    oduzimanje();
  }

  $("#trenutna").text(ulog);
  $("#uvecanje").on('click', function() {
    if (bodovi > ulog) {
      ulog = ulog + 5;
      $("#trenutna").text(ulog);
    }
  })
  $("#oduzimanje").on('click', function() {
    if (ulog > 5) {
      ulog = ulog - 5;
      $("#trenutna").text(ulog);
    }
  })
  $("#finish").on("click", function() {
    $(".dugme").hide();
    $("#ulog").hide();
    $("#Winer").text("Game has finished");
  })


});
