//Code your solution here
function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector('.target');
}
function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}
function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
 
  for (let i = 0; i < lis.length; i++) {
    var a = parseInt(i);
    lis[a].innerHTML = (a + n).toString();
  }
}
