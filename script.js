//DOMContentLoaded-событие которое говорит что произойдет когда загрузится страница
document.addEventListener('DOMContentLoaded', () => {
   const hero = document.querySelector('.hero');
   const header = document.querySelector('.header');
   const scrollItems = document.querySelectorAll('.scroll-item');

   const scrollAnimation = () => {
      let windowCenter = (window.innerHeight / 2) + window.scrollY;

      scrollItems.forEach(el => {
         let scrollOffset = (el.offsetHeight / 2) + el.offsetTop;

         if (windowCenter >= scrollOffset) {
            el.classList.add('animation-class');
         } else {
            el.classList.remove('animation-class');
         }
      });
   };
   const headerFixed = () => {
      //в скроле мы нахзодим высоту блока и так же скроля до его половины наступает событие
      let scrollTop = window.scrollY;//показывает до какой высоты доскролили
      let heroCenter = hero.offsetHeight / 2;// показывает высоту элемента

      if (scrollTop >= heroCenter) {
         header.classList.add('fixed');
         hero.style.marginTop = `${header.offsetHeight}px`;
      } else {
         header.classList.remove('fixed');
         hero.style.marginTop = `0px`;
      }
   };

   headerFixed();
   scrollAnimation();
   window.addEventListener('scroll', () => {
      //в скроле мы нахзодим высоту блока и так же скроля до его половины наступает событие
      headerFixed();
      scrollAnimation();
   });
});

