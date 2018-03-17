// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

window.onload = function() {
  const tasks = document.getElementsByClassName('task');

  for (task of tasks) {
    task.onclick = function() {
      console.log('clicked');
    }
  }

  const backs = document.getElementsByClassName('task__controls');
  for (back of backs) {
    back.onclick = function(e) {
      e.stopPropagation();
      console.log('back');
    }
  }
}