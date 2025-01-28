import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.scss'
export const Hero = () => {
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Hello I'm Nicklas!</h1>
				<p className={styles.description}>
					Im a software developer with wide experience with frontend and backend
					developing.
				</p>
				<a href='mailto:myemail@email.com' className={styles.contactBtn}>
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
