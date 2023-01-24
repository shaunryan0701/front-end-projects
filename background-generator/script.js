const input1 = document.getElementsByName("color1") [0]
const input2 = document.getElementsByName("color2") [0]
const h3 = document.getElementsByTagName("h3")[0]
const body = document.getElementsByTagName("body") [0]

function setBackgroundGradient() {
  body.style.background = 
  "linear-gradient(to right, " 
  + input1.value 
  + ", " 
  +  input2.value 
  + ")"

  h3.textContent = body.style.background + ";"
}

setBackgroundGradient()

input1.addEventListener("input", setBackgroundGradient)

input2.addEventListener("input", setBackgroundGradient)
