$(function() {

  iframe();

  function iframe() {
    $('body').append('<iframe src="http://156.35.95.73/cross-server" id="banner"></iframe>');
    $('#banner').load(enviarDatos);
  }

  function enviarDatos() {
    var timestamp = new Date();
    var iframe = $("#banner")[0];
    iframe.contentWindow.postMessage(timestamp, "http://156.35.95.73");
  }

  window.addEventListener("message", recibirDatos, false);

  function recibirDatos(datos) {console.log(datos);
    if(datos.origin == "http://156.35.95.73") {
      $('body').attr("style", "background-image:url(" + datos.data + ")");
    }
  }

});
