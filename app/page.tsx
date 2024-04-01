import Nav from './ui/Nav';
import Home from './ui/Home';
import Work from './ui/Work';
import ToolChain from './ui/ToolChain';
import Contacts from './ui/Contacts';
import Footer from './ui/Footer';

export default function Page() {
	return (
		<>
			<Nav />
			<main className='px-6 space-y-16'>
				<Home />
				<Work />
				<ToolChain />
				<Contacts />
			</main>
			<Footer />
		</>
	);
}
