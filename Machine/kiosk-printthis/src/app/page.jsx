import Carousel from '@/components/Carousel';
import Qr from '@/components/Qr';
import Divider from '@/components/Divider';

export default function Home() {
	return (
		<main className>
			<Carousel />
			<Divider />
			<Qr />
		</main>
	);
}
