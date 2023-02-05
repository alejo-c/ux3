const addNavbar = () => {
	document.body.insertAdjacentHTML('afterbegin', `
		<nav id="navbar">
			<ul id="nav-items-list">
				<li class="nav-item" id="index">
					<a class="nav-link" href="/">
						<span class="nav-icon" id="index-icon"></span>
						Index
					</a>
				</li>
				<li class="nav-item" id="vehicle-image-gallery">
					<a class="nav-link" href="/vehicle-image-gallery.html">
						<span class="nav-icon" id="gallery-icon"></span>
						Vehicle Gallery
					</a>
				</li>
				<li class="nav-item" id="treehouse-clone">
					<a class="nav-link" href="/treehouse-clone.html">
						<span class="nav-icon" id="treehouse-icon"></span>
						Treehouse Clone
					</a>
				</li>
				<li class="nav-item" id="slack-clone">
					<a class="nav-link" href="/slack-clone.html">
						<span class="nav-icon" id="slack-icon"></span>
						Slack Clone
					</a>
				</li>
			</ul>
		</nav>
	`)

	let currentPage = window.location.href.split('/').pop().replace('.html', '')
	if (currentPage === '')
		currentPage = 'index'

	const navLinks = document.querySelectorAll('.nav-link')
	for (const navLink of navLinks)
		if (currentPage === navLink.parentNode.id) {
			navLink.classList.add('active')
			break
		}
}

document.addEventListener('DOMContentLoaded', addNavbar)