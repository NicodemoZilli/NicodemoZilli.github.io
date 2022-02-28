var words=["Java Developer","PHP Developer","Backend - Frontend Web Developer","Web Servers Administrator","Data Base Administrator","Freelancer"];
var j=0;

var txt = words[j]; /* The text */
var i = txt.length;
var speed = 50; /* The speed/duration of the effect in milliseconds */

var a =0;
var hw = "Hello World!\nI'm Nicodemo Zilli";
var at=1;
var totalLoops = 3;

function TypeHW() {
  if (a < hw.length) {
    document.getElementById("hw").innerHTML += (hw.charAt(a)!="\n")?hw.charAt(a):"<br>";
    a++;
    setTimeout(TypeHW, speed);
  }else{
    setTimeout(typeWriter, 800);
  }
}


function typeWriterDown() {
  if (i <=txt.length) {
    document.getElementById("sentence").innerHTML = txt.substring(0, txt.length - i);
    i++;
    setTimeout(typeWriterDown, speed);
  }else{
    changeword();
    if(at>totalLoops){
      document.getElementById("hw").innerHTML = "";
      document.getElementById("sentence").innerHTML = "";
      at=0;
      a =0;
      TypeHW();
    }else setTimeout(typeWriter, speed);
  }
}

function typeWriter() {
  if (i>0) {
    i--;
    document.getElementById("sentence").innerHTML = txt.substring(0, txt.length - i);
    setTimeout(typeWriter, speed);
  }else{
    setTimeout(typeWriterDown, 3000);
  }
}

function changeword(){
    if(j<words.length-1) j++;
    else{ j=0; at++; }
    txt = words[j];
    i=txt.length;
}
