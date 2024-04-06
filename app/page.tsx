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
			<main className='px-1lh space-y-4lh sm:max-w-7xl sm:mx-auto sm:px-3lh lg:max-w-7xl lg:w-3/4'>
				<Home />
				<Work />
				<ToolChain />
				<Contacts />
			</main>
			<Footer />
		</>
	);
}
