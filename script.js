window.addEventListener('load', () => {
  const navToggle = document.querySelector('.nav-toggle')
  const nav = document.querySelector('.nav')
  const iconBarArray = document.querySelectorAll('.icon_bar')

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible')
    iconBarArray.forEach((iconBar) => {
      iconBar.classList.toggle('active_icon_bar')
    })
  })

})


