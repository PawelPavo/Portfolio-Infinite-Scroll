import * as React from 'react';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './utils/global'
import { theme } from './utils/theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useOnClickOutside } from './utils/hooks';
import HomeView from './components/HomeView';
import ContactView from './components/ContactView';
import NavBar from './components/NavBar';
import BioView from './components/BioView';
import Burger from './components/navBarMobile/Burger/Burger';
import Menu from './components/navBarMobile/Menu/Menu';


const App = (props: AppProps) => {
	const [open, setOpen] = React.useState<boolean>(false)
	const node = React.useRef();
	useOnClickOutside(node, () => setOpen(false));

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
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
			</ThemeProvider>
		</>
	);
};

interface AppProps { }

export default App;
