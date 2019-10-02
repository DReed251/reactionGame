// Part 1

// - +++++++++++++++++Have a box on the screen+++++++++++++++++
// - +++++++++++++++++when box is clicked, it disappears+++++++++++++++++
// - +++++++++++++++++when the box is clicked, it reappears after 3 seconds (may need research)+++++++++++++++++
// - +++++++++++++++++Measure time between shape appearing and being clicked+++++++++++++++++
// - +++++++++++++++++Output that time+++++++++++++++++

// Part 2
// - +++++++++++++++++Random delay time+++++++++++++++++
// -+++++++++++++++++ Random location on screen+++++++++++++++++
// - -+++++++++++++++++Random shape-+++++++++++++++++
// - -+++++++++++++++++Height and width-+++++++++++++++++
// - -+++++++++++++++++Curvature-+++++++++++++++++
// - -+++++++++++++++++Random color-+++++++++++++++++

window.onload = appear();

var clicked;

function disappear() {
  document.getElementById('box').style.display='none';
  clicked=Date.now()
  var reactionTime = (clicked-start)/1000;
  alert(reactionTime+ ' seconds!');
  var randomDelay = ((Math.random()*3)+1)*1000;
  setTimeout(appear, randomDelay);
}

function appear() {
  var randomTop = Math.random()*400;
  var randomLeft = Math.random()*700;
  var randomHeight = Math.random()*200+20;
  var randomWidth = Math.random()*200+20;
  var randomCurve = Math.random();
  var randomColor = "#"+((1<<24)*Math.random()|0).toString(16);

  if (randomCurve < 0.5) {
    document.getElementById('box').style.borderRadius=100+'%';
  } else {
    document.getElementById('box').style.borderRadius=0+'px';
  }
  document.getElementById('box').style.top=randomTop+'px';
  document.getElementById('box').style.left=randomLeft+'px';
  document.getElementById('box').style.height=randomHeight+'px';
  document.getElementById('box').style.width=randomWidth+'px';
  document.getElementById('box').style.display='block';
  document.getElementById('box').style.backgroundColor=randomColor;
  start=Date.now();
}
