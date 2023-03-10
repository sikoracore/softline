// Custom Scripts
// @@include('main.js')
// Accordion
class ItcAccordion {
	constructor(target, config) {
		this._el =
			typeof target === 'string' ? document.querySelector(target) : target
		const defaultConfig = {
			alwaysOpen: true,
			duration: 350,
		}
		this._config = Object.assign(defaultConfig, config)
		this.addEventListener()
	}
	addEventListener() {
		this._el.addEventListener('click', (e) => {
			const elHeader = e.target.closest('.accordion__header')
			if (!elHeader) {
				return
			}
			if (!this._config.alwaysOpen) {
				const elOpenItem = this._el.querySelector('.accordion__item_show')
				if (elOpenItem) {
					elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null
				}
			}
			this.toggle(elHeader.parentElement)
		})
	}
	show(el) {
		const elBody = el.querySelector('.accordion__body')
		if (
			elBody.classList.contains('collapsing') ||
			el.classList.contains('accordion__item_show')
		) {
			return
		}
		elBody.style['display'] = 'block'
		const height = elBody.offsetHeight
		elBody.style['height'] = 0
		elBody.style['overflow'] = 'hidden'
		elBody.style['transition'] = `height ${this._config.duration}ms ease`
		elBody.classList.add('collapsing')
		el.classList.add('accordion__item_slidedown')
		elBody.offsetHeight
		elBody.style['height'] = `${height}px`
		window.setTimeout(() => {
			elBody.classList.remove('collapsing')
			el.classList.remove('accordion__item_slidedown')
			elBody.classList.add('collapse')
			el.classList.add('accordion__item_show')
			elBody.style['display'] = ''
			elBody.style['height'] = ''
			elBody.style['transition'] = ''
			elBody.style['overflow'] = ''
		}, this._config.duration)
	}
	hide(el) {
		const elBody = el.querySelector('.accordion__body')
		if (
			elBody.classList.contains('collapsing') ||
			!el.classList.contains('accordion__item_show')
		) {
			return
		}
		elBody.style['height'] = `${elBody.offsetHeight}px`
		elBody.offsetHeight
		elBody.style['display'] = 'block'
		elBody.style['height'] = 0
		elBody.style['overflow'] = 'hidden'
		elBody.style['transition'] = `height ${this._config.duration}ms ease`
		elBody.classList.remove('collapse')
		el.classList.remove('accordion__item_show')
		elBody.classList.add('collapsing')
		window.setTimeout(() => {
			elBody.classList.remove('collapsing')
			elBody.classList.add('collapse')
			elBody.style['display'] = ''
			elBody.style['height'] = ''
			elBody.style['transition'] = ''
			elBody.style['overflow'] = ''
		}, this._config.duration)
	}
	toggle(el) {
		el.classList.contains('accordion__item_show')
			? this.hide(el)
			: this.show(el)
	}
}
    new ItcAccordion(document.querySelector('.accordion'), {
			alwaysOpen: true,
	})

var acc = document.getElementsByClassName('accordion')
var i

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		/* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
		this.classList.toggle('active')

		/* Toggle between hiding and showing the active panel */
		var panel = this.nextElementSibling
		if (panel.style.display === 'block') {
			panel.style.display = 'none'
		} else {
			panel.style.display = 'block'
		}
	})
}

// Swiper
let swiper = new Swiper('.mySwiper', {
	loop: true,
	navigation: {
		nextEl: '.btn-next',
		prevEl: '.btn-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return (
				'\
          <div class="box ' +
				className +
				'">\
          </div>'
			)
		},
	},
})

/*========= SHOW SCROLL UP ==========*/
const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up')

	if (scrollY >= 350) {
		scrollUp.classList.add('show-scroll')
	} else {
		scrollUp.classList.remove('show-scroll')
	}
}
window.addEventListener('scroll', scrollUp)
