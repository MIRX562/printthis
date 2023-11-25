import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Countdown from '@/components/Countdown';
import Steps from '@/components/Steps';
import Team from '@/components/Team';
import Header from '@/components/Header';

export default function Home() {
	return (
		<main>
			<Nav />
			<Countdown />
			<Header />
			<Steps />
			<Team />
			<Footer />
		</main>
	);
}
