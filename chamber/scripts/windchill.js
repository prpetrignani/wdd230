function myFunction (t, s) {
    
    if (t <= 10 && s > 4.8) {
        return "Wind Chill: " + Math.round (
            35.74 +
            0.6215 * t -
            (35.75 * s) ** 0.16 +
            (0.3965 * t) ** 0.16 
        );
    }

    else {
        return "Wind Chill: N/A";
    }
}

let w = myFunction(33, 2.5);
document.getElementById("chill").innerHTML = w.toString();