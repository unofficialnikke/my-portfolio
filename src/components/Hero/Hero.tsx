import { getImageUrl } from '../../utils'
import styles from './Hero.module.scss'
export const Hero = () => {
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Hi! I'm Nicklas Nyström!</h1>
				<p className={styles.description}>
					A software developer eager to grow, innovate, and take on new challenges.
					<br />
					<br />I believe that software development is a lifelong learning journey, always offering
					something new to learn, as technological advancement never comes to an end.
				</p>
				<a href={`mailto:${import.meta.env.VITE_EMAIL}`} className={styles.contactBtn}>
					Contact me
				</a>
			</div>
			<img
				src={getImageUrl('hero/profile.JPG')}
				alt='My profile picture'
				className={styles.heroImg}
			/>
			<div className={styles.topBlur} />
			<div className={styles.bottomBlur} />
		</section>
	)
}
