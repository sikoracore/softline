// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
   const burger = document.querySelector('.burger')
   const menu = document.querySelector('.menu')
   const body = document.querySelector('body')
   burger.addEventListener('click', () => {
     if (!menu.classList.contains('active')) {
       menu.classList.add('active')
       burger.classList.add('active-burger')
       body.classList.add('locked')
     } else {
       menu.classList.remove('active')
       burger.classList.remove('active-burger')
       body.classList.remove('locked')
     }
   })
   // Вот тут мы ставим брейкпоинт навбара
   window.addEventListener('resize', () => {
     if (window.innerWidth > 991.98) {
       menu.classList.remove('active')
       burger.classList.remove('active-burger')
       body.classList.remove('locked')
     }
   })
 }
 burgerMenu()
 
 
 // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
 function fixedNav() {
   const nav = document.querySelector('nav')
 
   // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
   const breakpoint = 1
   if (window.scrollY >= breakpoint) {
     nav.classList.add('fixed__nav')
   } else {
     nav.classList.remove('fixed__nav')
   }
 }
 window.addEventListener('scroll', fixedNav)

 // Аккордеон
function accordion() {
   const items = document.querySelectorAll('.accordion__item-trigger')
   items.forEach(item => {
       item.addEventListener('click', () => {
           const parent = item.parentNode
           if (parent.classList.contains('accordion__item-active')) {
               parent.classList.remove('accordion__item-active')
           } else {
               document
                   .querySelectorAll('.accordion__item')
                   .forEach(child => child.classList.remove('accordion__item-active'))   
               parent.classList.add('accordion__item-active')
           }
       })
   })
}
accordion() 
 

const list = document.querySelector('.list'),
      items = document.querySelectorAll('.blocks__item')
      listItems = document.querySelectorAll('.list__item')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target

        if(target.classList.contains('list__item')) {
            listItems.forEach(listItem => listItem.classList.remove('active'))
            target.classList.add('active')
        }


        switch(targetId) {
            case 'all':
                getItems('blocks__item')
                break
            case 'winter':
                getItems(targetId)
                break
            case 'spring':
                getItems(targetId)
                break
            case 'autumn':
                getItems(targetId)
                break
            case 'summer':
                getItems(targetId)
                break
        }
    })
}
filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}

// Step Form
function stepForm() {
   const steps = document.querySelectorAll('.form__step')
   const prevBrn = document.querySelector('.prev__step')
   const nextBrn = document.querySelector('.next__step')
   const form = document.querySelector('.steps__form')
   const stepNumbers = document.querySelectorAll('.step__number')
   const progress = document.querySelector('.progress__success')

   form.addEventListener('submit', (e) => e.preventDefault())

   let formSteps = 0

   nextBrn.addEventListener('click', () => {
       if (formSteps === steps.length) {
           formSteps = steps.length - 1
       }
       formSteps++

       updadeFormSteps()
   })

   prevBrn.addEventListener('click', () => {
       formSteps--
       stepNumbers[formSteps + 1].classList.remove('active__number')
       updadeFormSteps()
   })

   function updadeFormSteps() {
       steps.forEach((step) => {
           step.classList.contains('active') && step.classList.remove('active')
       })

       stepNumbers[formSteps].classList.add('active__number')
       steps[formSteps].classList.add('active')

       if (formSteps === 0) {
           prevBrn.disabled = true
       } else {
           prevBrn.disabled = false
       }

       if (formSteps === steps.length - 1) {
           nextBrn.disabled = true
       } else {
           nextBrn.disabled = false
       }

       const actives = document.querySelectorAll('.active__number')
       const percent = ((actives.length - 1) / (stepNumbers.length - 1)) * 100 + '%'

       progress.style.width = percent
   }

   updadeFormSteps()
}
stepForm()


const swiper = new Swiper('.swiper', {
  
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },

 //   // Responsive breakpoints
 //   breakpoints: {
 //   // when window width is >= 320px
 //   320: {
 //     slidesPerView: 3,
 //     spaceBetween: 20
 //   },
 //   // when window width is >= 480px
 //   480: {
 //     slidesPerView: 3,
 //     spaceBetween: 30
 //   },
 // }
 });


 function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='flex') {
   const header = document.querySelector(headerSelector),
         tab = document.querySelectorAll(tabSelector),
         content = document.querySelectorAll(contentSelector)
   function hideTabContent() {
       content.forEach(item => {
           item.style.display = 'none'
       });
       tab.forEach(item => {
           item.classList.remove(activeClass)
       });
   }
   function showTabContent(i = 0) {
      content[i].style.display = display
      tab[i].classList.add(activeClass)
   }
   hideTabContent()
   showTabContent()
   header.addEventListener('click', e => {
       const target = e.target
       if (target.classList.contains(tabSelector.replace(/\./, '')) || 
       target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
           tab.forEach((item, i) => {
               if ( target == item || target.parentNode == item ) {
                   hideTabContent()
                   showTabContent(i)
               }
           });
       }
   })
}

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
tabs( '.tabs__header' ,'.tabs__header-item', '.tabs__content-item', 'active')
