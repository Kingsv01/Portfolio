const skillsIntroText = document.querySelector('.skillsIntroText span');

const textAnimation = () => {
  setTimeout( () => {
    skillsIntroText.innerHTML = "website developer";
  }, 0);

  setTimeout( () => {
    skillsIntroText.innerHTML = "website designer";
  }, 5000);

  setTimeout( () => {
    skillsIntroText.innerHTML = "youtuber";
  }, 10000);

}

textAnimation();
setInterval(textAnimation, 15000);