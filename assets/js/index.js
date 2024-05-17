$(document).ready(function () {

  $("#txtbtn1").click(function () {
    $("#ocultar1").toggle(1000);
  });
  $("#txtbtn2").click(function () {
    $("#ocultar2").toggle(1000);
  });
  $("#txtbtn3").click(function () {
    $("#ocultar3").toggle(1000);
  });
  $("#txtbtn4").click(function () {
    $("#ocultar4").toggle(1000);
  });

  var bttnUno = $("#uno");
  var bttnDos = $("#dos");
  var bttnTres = $("#tres");
  var bttnCuatro = $("#cuatro");

  new bootstrap.Tooltip(bttnUno);
  new bootstrap.Tooltip(bttnDos);
  new bootstrap.Tooltip(bttnTres);
  new bootstrap.Tooltip(bttnCuatro);
})

$(document).scroll(function(){
console.log($("#barra").offset().top);

if ($("#barra").offset().top > 800){
  $("#barra").addClass("bg-dark");
} else {
  $("#barra").removeClass("bg-dark");
}
});


function alerta(evento) {
    event.preventDefault();
    alert("El correo fue enviado correctamente...");
  };

