const body = document.getElementsByTagName('body')[0]
const btn = document.getElementsByTagName('button')[0]

barba.init({
  // TODO: define transition
})

btn.addEventListener("click", () => {
  if (btn.innerHTML === "CHANGE") {
    btn.innerHTML = "CHANGE BACK"
    epic()
  } else {
    btn.innerHTML = "CHANGE"
    boring()
  }
});

function epic() {
  body.style.backgroundColor = '#0c0c0c'
  body.style.color = '#fff'
}

function boring() {
  body.style.backgroundColor = '#fff'
  body.style.color = '#000'
}