document.querySelectorAll('.contact').forEach((e) => {
	let idMessage = {
		'fa-envelope': 'Contact me on my E-Mail!',
		'fa-github': 'All my projects are on GitHub!',
		'fa-instagram': 'Check out my daily life on Instagram!',
		'fa-linkedin': 'You can check my <i>curriculum vitae</i> on LinkedIn!',
	}

	e.onmouseenter = () => {
		document.getElementById('logo-desc').innerHTML = idMessage[e.id]
		document.getElementById('logo-desc').classList.add('logo-desc-show')
	}
	e.onmouseleave = () => {
		document.getElementById('logo-desc').classList.remove('logo-desc-show')
	}
})

document.querySelectorAll('.navbar-menu').forEach((e) => {
	let wrapperID = e.id.substring(e.id.indexOf('-') + 1) + '-wrapper'

	document.getElementById(e.id).onclick = () => {
		const element = document.getElementById(wrapperID)
		const offset = document.getElementById('navbar').offsetHeight
		const bodyRect = document.body.getBoundingClientRect().top
		const elementRect = element.getBoundingClientRect().top
		const elementPosition = elementRect - bodyRect
		const offsetPosition = elementPosition - offset

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		})
	}
})

document.getElementById('scroll-down').onclick = () => {
	document.getElementById('navbar').scrollIntoView({
		behavior: 'smooth',
	})
}

var projectPos = 0
var disable = false
document.querySelectorAll('.project-navigation').forEach((e) => {
	const carouselDirection = (moveCount) => {
		if (moveCount > 0) return 'carousel-right'
		else return 'carousel-left'
	}
	const projects = [
		[
			'/images/project/maze.png',
			'Maze Playground',
			'https://noverdy.github.io/maze-playground/',
		],
		[
			'/images/project/sort.png',
			'Sort Visualizer',
			'https://noverdy.github.io/sort-visualizer/',
		],
		[
			'/images/project/kugooglein.png',
			'Kugooglein',
			'https://kugooglein.site/',
		],
		[
			'/images/project/bangesan.png',
			'Bang Esan Discord Bot',
			'https://noverdy.github.io/bang-esan/',
		],
		[
			'/images/project/ytclipper.png',
			'YT Clipper',
			'https://noverdy.github.io/yt-clipper-client/',
		],
	]
	const element = document.getElementById('projects-content')

	let moveCount = parseInt(e.id)

	e.onclick = () => {
		if (!disable) {
			disable = true
			projectPos =
				(projectPos + (moveCount % projects.length) + projects.length) %
				projects.length

			let HTMLTemplate = `<img src="${projects[projectPos][0]}">
								<div class="project-description">${projects[projectPos][1]}</div>`
			let direction = carouselDirection(moveCount)

			element.classList.add(direction)
			setTimeout(() => {
				element.innerHTML = HTMLTemplate
				element.href = projects[projectPos][2]
				setTimeout(() => {
					element.classList.remove(direction)
					disable = false
				}, 300)
			}, 300)
		}
	}
})
