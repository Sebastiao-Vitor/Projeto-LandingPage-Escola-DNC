//  Carrossel 

let setaLefth = window.document.getElementById("seta-Lefth")
let Bruna = window.document.getElementById("person1")
let Leonardo = window.document.getElementById("person2")
let Samantha = window.document.getElementById("person3")
let setaRight = window.document.getElementById("seta-Right")
let Gradiente = window.document.getElementById("gradiente")

function rolagemRight() {
  Bruna.style = "display:none"
  Samantha.style = "display:flex"
  setaRight.style = "display:none"
  setaLefth.style = "display:flex"
  Gradiente.style = "background: var(--bc-main-2)"
}

function rolagemLefth() {
  Samantha.style = "display:none"
  Bruna.style = "display:flex"
  setaLefth.style = "display:none"
  setaRight.style = "display:flex"
  Gradiente.style = "background: var(--bc-main-3)"
}