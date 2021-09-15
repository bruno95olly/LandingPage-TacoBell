  const slides = document.querySelectorAll('.slides');
  const back = document.querySelector('.back');
  const next = document.querySelector('.next');

  i = 0;

  function ativaSlide(n){
    for(slide of slides)
    slide.classList.remove('active');
    slides[n].classList.add('active');
  }

  next.addEventListener('click', function(){
    if (i == slides.length - 1) {
      i = 0;
      ativaSlide(i);
    }
    else{
      i++;
      ativaSlide(i);
    }
  })
  back.addEventListener('click', function(){
    if (i == 0) {
      i == slides.length - 1
      ativaSlide(i);
    }
    else{
      i--;
      ativaSlide(i);
    }
  })
