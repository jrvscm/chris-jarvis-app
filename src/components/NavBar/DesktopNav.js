import React from 'react';
import { BLOG } from '../../constants/routes';

import NavButton from './NavButton';	
import { List, Row, Logo } from '../UIElements';	

const DesktopNav = () => (
	<Row>
		<List>
			<NavButton 
				path={''}
				title={`START HERE`}
				subTitle={`NEW HERE? CLICK THIS`}
			/>
			<NavButton 
				path={''}
				title={`ABOUT`}
				subTitle={`WHO I AM?`}
			/>
			<NavButton
				path={''}
				title={`COURSES`}
				subTitle={`COMING SOON`}
			/>	
		</List>	
		<Logo>
		</Logo>			
		<List>	
			<NavButton 
				path={''}
				title={`CONTACT`}
				subTitle={`GET IN TOUCH`}
			/>					
			<NavButton 
				path={BLOG}
				title={`BLOG`}
				subTitle={`I WRITE`}
			/>
			<NavButton 
				path={''}
				title={`RESOURCES`}
				subTitle={`TOOLS OF THE TRADE`}
			/>							
		</List>
	</Row>
)

export default DesktopNav;