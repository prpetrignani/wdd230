let last = document.lastModified;
document.getElementById('lastupdate').innerHTML = last;

const option = {year: 'numeric'};
document.getElementById('date').innerHTML = new Date().getFullYear('en-US', Option);