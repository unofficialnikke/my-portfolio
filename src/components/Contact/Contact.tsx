import { BsEnvelopeFill, BsGithub, BsLinkedin } from 'react-icons/bs'
import styles from './Contact.module.scss'
export const Contact = () => {
	return (
		<footer id='contact' className={styles.container}>
			<div className={styles.text}>
				<h2>Contact</h2>
				<p>
					I'm currently seeking a role as software developer. Have you any questions or want to
					connect with me, feel free to reach out!
				</p>
			</div>
			<ul className={styles.links}>
				<li className={styles.link}>
					<a href={`mailto:${import.meta.env.VITE_EMAIL}`}>
						<BsEnvelopeFill /> Email
					</a>
				</li>
				<li className={styles.link}>
					<a href={import.meta.env.VITE_LINKEDIN}>
						<BsLinkedin /> LinkedIn
					</a>
				</li>
				<li className={styles.link}>
					<a href={import.meta.env.VITE_GITHUB}>
						<BsGithub /> Github
					</a>
				</li>
			</ul>
		</footer>
	)
}
