//const option = {month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
//document.getElementById('lastupdate') = document.lastModified('en-US', option);
let last = document.lastModified;
document.getElementById('lastupdate').innerHTML = last;
//var lastupdate = document.lastModified;
//document.getElementById('lastupadate') = new lastupdate;