

const options = {
    timeout: 50000,
  };
  function success(pos) {
   var crd = pos.coords.speed;
    document.getElementById("speed").innerHTML=crd;


  }
  
  function successl(pos) {
    var crds = pos.coords.speed;
  document.getElementById("speed").innerHTML=crds;
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  navigator.geolocation.getCurrentPosition(success, error, options);
  loop();
 function loop(){
  navigator.geolocation.getCurrentPosition(successl, error, options);
  setTimeout(loop, 5000)
  }
 //navigator.geolocation.watchPosition(successl, error, options);
