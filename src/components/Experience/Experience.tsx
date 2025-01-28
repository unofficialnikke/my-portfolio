import styles from './Experience.module.scss'
import skills from '../../data/skills.json'
import school from '../../data/school.json'
import { getImageUrl } from '../../utils'

export const Experience = () => {
	const frontendSkills = skills.filter((skill) => skill.type === 'frontend')
	const backendSkills = skills.filter((skill) => skill.type === 'backend')
	const languageSkills = skills.filter((skill) => skill.type === 'language')

	return (
		<section className={styles.container} id='experience'>
			<h2 className={styles.title}>Experience</h2>
			<div className={styles.content}>
				<div className={styles.skills}>
					<h3>Frontend</h3>
					<div className={styles.skillsCategory}>
						{frontendSkills.map((skill, id) => {
							return (
								<div className={styles.skill} key={id}>
									<div className={styles.skillImageContainer}>
										<img src={getImageUrl(skill.imageSrc)} alt={skill.title} />{' '}
									</div>
									<p>{skill.title}</p>
								</div>
							)
						})}
					</div>
					<h3>Backend</h3>
					<div className={styles.skillsCategory}>
						{backendSkills.map((skill, id) => {
							return (
								<div className={styles.skill} key={id}>
									<div className={styles.skillImageContainer}>
										<img src={getImageUrl(skill.imageSrc)} alt={skill.title} />{' '}
									</div>
									<p>{skill.title}</p>
								</div>
							)
						})}
					</div>
					<h3>Languages</h3>
					<div className={styles.skillsCategory}>
						{languageSkills.map((skill, id) => {
							return (
								<div className={styles.skill} key={id}>
									<div className={styles.skillImageContainer}>
										<img src={getImageUrl(skill.imageSrc)} alt={skill.title} />{' '}
									</div>
									<p>{skill.title}</p>
								</div>
							)
						})}
					</div>
				</div>
				<ul className={styles.history}>
					{school.map((item, id) => {
						return (
							<li className={styles.historyItem} key={id}>
								<img
									src={getImageUrl(item.imageSrc)}
									alt={`${item.school} Logo`}
								/>
								<div className={styles.historyItemDetails}>
									<h3>{item.school}</h3>
									<p>{item.programme}</p>
									<p>{`${item.startDate} - ${item.endDate}`}</p>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		</section>
	)
}
