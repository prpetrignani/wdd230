let w = myFunction(33, 2.5);
document.getElementById("chill").innerHTML = w;
function myFunction (t, s) {
    
    if (t <= 10 || s > 4.8) {
        return "Wind Chill: " + Math.round (
            35.74 +
            0.6215 * t -
            (35.75 * s) ** 0.16 +
            (0.3965 * t) ** 0.16 
        );
    }

    else {
        return "N/A";
    }
}



/*document.getElementById("chill").innerHTML = myFunction ();
function windChill () {
    var t = document.getElementById ("temp");
    var s = document.getElementById ("speed");
    
    if (t <= 10 || s > 4.8){
        return "Wind Chill: " + Math.round (
            35.74 +
            0.6215 * t -
            (35.75 * s) ** 0.16 +
            (0.3965 * t) ** 0.16
        );
    }

    else {
        return "N/A";
    }
}*/

/*const windChillCelsius = (temperature, windSpeed) =>
  13.12 +
  0.6215 * temperature -
  11.37 * windSpeed ** 0.16 +
  0.3965 * temperature * windSpeed ** 0.16;*/