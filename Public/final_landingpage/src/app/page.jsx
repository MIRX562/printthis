import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Countdown from '@/components/Countdown';
import Steps from '@/components/Steps';
import Header from '@/components/Header';

export default function Home() {
	return (
		<main>
			<Nav />
			<Countdown />
			<Header />
			<Steps />
			<Footer />
		</main>
	);
}
