import Blog from './components/blog/Blog'
import Footer from './components/footer/Footer'
import Guide from './components/guide/Guide'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Review from './components/review/Review'
import Service from './components/service/Service'
import Session from './components/session/Session'

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Service />
				<Review />
				<Blog />
				<Guide />
				<Session />
				<Footer />
			</main>
		</>
	)
}

export default App
