import { getImageUrl } from '../../utils'
import styles from './ProjectCard.module.scss'

type Project = {
	title: string
	imageSrc: string
	description: string
	skills: string[]
	demo: string
	source: string
}

type ProjectProps = {
	project: Project
}

export const ProjectCard = ({ project }: ProjectProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img
					src={getImageUrl(project.imageSrc)}
					alt={`Image of ${project.title}`}
					className={styles.image}
				/>
			</div>
			<h3 className={styles.title}>{project.title}</h3>
			<p className={styles.description}>{project.description}</p>
			<ul className={styles.skills}>
				{project.skills.map((skill, id) => (
					<li className={styles.skill} key={id}>
						{skill}
					</li>
				))}
			</ul>
			<div className={styles.links}>
				{project.demo ? (
					<a href={project.demo} className={styles.link}>
						Demo
					</a>
				) : null}

				<a href={project.source} className={styles.link}>
					Source
				</a>
			</div>
		</div>
	)
}
