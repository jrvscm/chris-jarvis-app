import React from 'react';	

import NavButton from './NavButton';	
import { List, Row, Logo } from '../UIElements';	

const DesktopNav = () => (
	<Row>
		<List>
			<NavButton 
				title={`START HERE`}
				subTitle={`NEW HERE? CLICK THIS`}
			/>
			<NavButton 
				title={`ABOUT`}
				subTitle={`WHO I AM?`}
			/>
			<NavButton
				title={`COURSES`}
				subTitle={`COMING SOON`}
			/>	
		</List>	
		<Logo>
		</Logo>			
		<List>	
			<NavButton 
				title={`CONTACT`}
				subTitle={`GET IN TOUCH`}
			/>					
			<NavButton 
				title={`BLOG`}
				subTitle={`I WRITE`}
			/>
			<NavButton 
				title={`RESOURCES`}
				subTitle={`TOOLS OF THE TRADE`}
			/>							
		</List>
	</Row>
)

export default DesktopNav;