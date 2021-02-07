//document.addEventListener("DOMContentLoaded", () => {
  // your code here
//});

document.getElementById('create-task-form').addEventListener("submit", function(event) {
  let ul = document.querySelector('ul')
  let li = document.createElement('li')
  li.innerHTML += `${document.getElementById("new-task-description").value}`
  document.getElementById("tasks").appendChild(li)
  event.preventDefault();
}, false);


