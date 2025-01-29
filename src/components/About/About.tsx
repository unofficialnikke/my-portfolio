import styles from './About.module.scss'
import { getImageUrl } from '../../utils'

export const About = () => {
	return (
		<section className={styles.container} id='about'>
			<h2 className={styles.title}>About</h2>
			<div className={styles.content}>
				<img
					src={getImageUrl('about/aboutImage.jpg')}
					alt='Image of me'
					className={styles.aboutImage}
				/>
			</div>
			<ul className={styles.aboutItems}>
				<li className={styles.aboutItem}>
					<img src={getImageUrl('about/uiIcon.png')} alt='Cursor icon' />
					<div className={styles.aboutItemText}>
						<h3>About me</h3>
						<p>
							I am an aspiring young software developer aiming to build a career in software
							development. I am immensely interested in various technologies and software
							development methodologies. The software projects I have participated in so far have
							provided valuable and essential experience in the programming field. In these
							projects, I have worked as a front-end developer, designed databases, and developed
							back-end services. I am confident that these experiences will also be beneficial in
							professional projects.
						</p>
					</div>
				</li>
				<li className={styles.aboutItem}>
					<img src={getImageUrl('about/cursorIcon.png')} alt='Cursor icon' />
					<div className={styles.aboutItemText}>
						<h3>Frontend Developer</h3>
						<p>
							Driven by a passion for building robust and scalable systems, I have developed backend
							solutions using Node.js with Express.js and Spring Boot with Java and Kotlin. I have
							designed and implemented databases, primarily with PostgreSQL, and created RESTful API
							endpoints to enable seamless communication between frontend and backend. Additionally,
							my experience with cloud services—especially AWS—has allowed me to deploy, manage, and
							optimize applications for real-world performance.
						</p>
					</div>
				</li>
				<li className={styles.aboutItem}>
					<img src={getImageUrl('about/serverIcon.png')} alt='Server icon' />
					<div className={styles.aboutItemText}>
						<h3>Backend Developer</h3>
						<p>
							Driven by a passion for building robust and scalable systems, I have developed backend
							solutions using Node.js with Express.js and Spring Boot with Java and Kotlin. I have
							designed and implemented databases, primarily with PostgreSQL, and created RESTful API
							endpoints to enable seamless communication between frontend and backend. Additionally,
							my experience with cloud services—especially AWS—has allowed me to deploy, manage, and
							optimize applications for real-world performance.
						</p>
					</div>
				</li>
			</ul>
		</section>
	)
}
