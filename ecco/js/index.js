let heroBtn = document.querySelector('.hero__btn');
let order = document.querySelector('.order');
let modal = document.querySelector('.modal');
let orderBtn = document.querySelector('.order__btn');
let orderSmall = document.querySelector('.order__ww');
let orderBig = document.querySelector('.order__ww-active');
let orderArrow = document.querySelectorAll('.order__arrow');
let cross = document.querySelectorAll('.descr__cross');
let descrBlock = document.querySelectorAll('.descr__block');

function scrollTo(element) {
    window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: "smooth"
    });
  }


//ПРОКРУТКА К БЛОКУ//
heroBtn.addEventListener('click', () => {
    scrollTo(order);
  });


function openModal() {
    modal.classList.add('modal_active');
    document.body.style.overflow = 'hidden';
  }


//ОТКРЫТЬ МОДАЛЬНОЕ ОКНО//
orderBtn.addEventListener('click', openModal);


//ОПИСАНИЕ ХАВЕР//
cross.forEach(item =>{
  item.addEventListener('mouseenter', (e) => {
    const id = item.getAttribute('data-tab');


    descrBlock.forEach(function (item){
      document.getElementById(id).style.opacity = '1'
    });
  });
});

cross.forEach(item =>{
  item.addEventListener('mouseleave', (e) => {
    descrBlock.forEach(function (item){
      item.style.opacity = '0'
    });
  });
});

let orderShoes = document.querySelector('.order__shoes');
let orderTitle = document.querySelector('.order__title');


orderArrow.forEach(item => {
  item.addEventListener('click', e => {
  });
});
