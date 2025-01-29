import styles from './Navbar.module.scss'
import { getImageUrl } from '../../utils'
import { useState } from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<nav className={styles.navbar}>
			<a className={styles.title} href='/'>
				Portfolio
			</a>
			<div className={styles.menu}>
				<img
					className={styles.menuBtn}
					src={menuOpen ? getImageUrl('nav/closeIcon.png') : getImageUrl('nav/menuIcon.png')}
					alt='menu-button'
					onClick={() => setMenuOpen(!menuOpen)}
				/>
				<ul
					className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
					onClick={() => setMenuOpen(false)}
				>
					<li>
						<a href={import.meta.env.VITE_LINKEDIN}>
							<BsLinkedin />
						</a>
					</li>
					<li>
						<a href={import.meta.env.VITE_GITHUB}>
							<BsGithub />
						</a>
					</li>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#experience'>Experience</a>
					</li>
					<li>
						<a href='#projects'>Projects</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}
