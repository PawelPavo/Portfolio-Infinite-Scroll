import * as React from 'react';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './utils/global'
import { theme } from './utils/theme';
import HomeView from './components/HomeView';
import ContactView from './components/ContactView';
import NavBar from './components/NavBar';
import BioView from './components/BioView';
import Burger from './components/navBarMobile/Burger/Burger';
import { useOnClickOutside } from './utils/hooks';
import Menu from './components/navBarMobile/Menu/Menu';


const App = (props: AppProps) => {
	const [open, setOpen] = React.useState<boolean>(false)
	const node = React.useRef();
	useOnClickOutside(node, () => setOpen(false));

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<>
				<div ref={node} className="desktop fixed-top pt-5">
					<Burger open={open} setOpen={setOpen} />
					<Menu open={open} setOpen={setOpen} />
				</div>
				<div className="mobile">
					<NavBar />
				</div>
					<HomeView />
					<BioView />
					<ContactView />
				
			</>
			<div className='ripple-background mobile'>
				<div className='circle xxlarge shade1'></div>
				<div className='circle xlarge shade2'></div>
				<div className='circle large shade3'></div>
				<div className='circle mediun shade4'></div>
				<div className='circle small shade5'></div>
			</div>
		</ThemeProvider>
	);
};

interface AppProps { }

export default App;
