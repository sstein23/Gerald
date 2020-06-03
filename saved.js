var varpable = document.querySelector(".BloodyButton")
var bloody = document.querySelector(".parapluie")
var fluff = document.querySelector(".M")
var flooff = document.querySelector(".O")
console.dir(fluff)
let varpie = false
function noHackOptions() {
  if (varpie === true){

    fluff.classList.remove("N")
    flooff.classList.remove("N")
    varpie = false
  }
  else if (varpie === false){
    fluff.classList.add("N");
    flooff.classList.add("N");
    varpie = true
  }
}
varpable.addEventListener("click", noHackOptions);
