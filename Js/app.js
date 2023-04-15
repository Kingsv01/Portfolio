const themeToggle = document.querySelector('.themeToggle');
const themeBtn = document.querySelector('.themeBtn');
const themeIcon = document.querySelector('.themeIcon');
const logoImg = document.querySelector('.logoImg');


themeToggle.onclick = () => {

  themeBtn.classList.toggle('active')

  if(themeBtn.classList.contains('active')) {
    themeIcon.src = '/Img/moon.png';
    document.body.classList.add('active');
    logoImg.src = '/Img/logo_white.png';
  }else {
    themeIcon.src = '/Img/sun.png'
    document.body.classList.remove('active');
    logoImg.src = '/Img/logo_black.png';
  }
}



const menuToggle = document.querySelector('.menuToggle')
const menuToggleSpans = document.querySelectorAll('.menuToggle span')
const navRight = document.querySelector('.navRight')

menuToggle.onclick = () => {

  menuToggleSpans.forEach(allSpans => {
    allSpans.classList.toggle('active')

    if(allSpans.classList.contains('active')) {
      navRight.classList.add('active');
    }else {
      navRight.classList.remove('active');
    }
  })
}


const scrollArrow = document.querySelector('.scrollArrow');

window.onscroll = () =>{
  
  menuToggleSpans.forEach(allSpans => {
    allSpans.classList.remove('active')

    if(allSpans.classList.contains('active')) {
      navRight.classList.add('active');
    }else {
      navRight.classList.remove('active');
    }
  })

  if(scrollY > 300) {
    scrollArrow.classList.add('active')
  }else {
    scrollArrow.classList.remove('active')
  }
}