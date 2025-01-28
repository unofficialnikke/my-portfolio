import React from 'react'
import styles from './About.module.scss'
import { getImageUrl } from '../../utils'

export const About = () => {
	return (
		<section className={styles.container} id='about'>
			<h2 className={styles.title}>About</h2>
			<div className={styles.content}>
				<img
					src={getImageUrl('about/aboutImage.png')}
					alt='Image of me'
					className={styles.aboutImage}
				/>
			</div>
			<ul className={styles.aboutItems}>
				<li className={styles.aboutItem}>
					<img src={getImageUrl('about/cursorIcon.png')} alt='Cursor icon' />
					<div className={styles.aboutItemText}>
						<h3>Frontend Developer</h3>
						<p>
							I have strong experience with creating responsive and user
							friendly user interfaces.
						</p>
					</div>
				</li>
				<li className={styles.aboutItem}>
					<img src={getImageUrl('about/serverIcon.png')} alt='Server icon' />
					<div className={styles.aboutItemText}>
						<h3>Backend Developer</h3>
						<p>
							I have created many Backend servers and APIs, with Node.js and
							SpringBoot.
						</p>
					</div>
				</li>
			</ul>
		</section>
	)
}
