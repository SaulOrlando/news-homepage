"use strict"

const menu = document.querySelector("#menu")
const menu_close = document.querySelector("#menu-close")
const nav = document.querySelector("#nav")
const bg = document.querySelector("#bg")

const remove_background = () => {
  nav.style.translate = "100%"
  bg.style.height = "0"
}

const add_background = () => {
  bg.style.height = "100%"
  nav.style.translate = "-100%"
}


menu.addEventListener("click", () => {
  add_background()
})

menu_close.addEventListener("click", () => {
  remove_background()
})

bg.addEventListener("click", () => {
  remove_background()
})
