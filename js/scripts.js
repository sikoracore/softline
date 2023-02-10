// Custom Scripts
// 

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
