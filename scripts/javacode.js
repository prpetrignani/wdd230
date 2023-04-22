let last = document.lastModified;
document.getElementById('lastupdate').innerHTML = last;

const option = {year: 'numeric'};
document.getElementById("date").textContent = new Date().toLocaleDateString('en-US', option);