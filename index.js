

const options = {
    enableHighAccuracy: true,
    timeout: 50000,
    maximumAge: 0,
  };
  var l0,lt,w0,wt,td,speed;
  function success(pos) {
    const crd = pos.coords;
  
  lt=crd.latitude;
  wt=crd.longitude

  }
  
  function successl(pos) {
    const crds = pos.coords;
  l0=lt;
  w0=wt;
  lt=crds.latitude;
  wt=crds.longitude;

  ld=Math.abs(((lt-l0)/360)*40075);
  wd=Math.abs(((wt-w0)/360)*40008);

  td=Math.sqrt((Math.pow(ld,2))*(Math.pow(wd,2)));
  speed=td/720;
  document.getElementById("speed").innerHTML=speed;
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