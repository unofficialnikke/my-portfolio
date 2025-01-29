import { Navbar } from './components/Navbar/Navbar'
import styles from './App.module.scss'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'

function App() {
	return (
		<div className={styles.app}>
			<Navbar />
			<Hero />
			<About />
			<Experience />
			<Projects />
			<Contact />
		</div>
	)
}

export default App
