import React from 'react';
import glamorous from 'glamorous';

import NavBar from '../NavBar';
import Hero from './Hero';

const HomePage = () => {
	return(
		<Page>
			<NavBar />
			<Hero />
		</Page>
	)
}

export default HomePage;

const Page = glamorous.div({
})