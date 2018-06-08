import React from 'react';
import { BLOG } from '../../constants/routes';
import glamorous from 'glamorous';

import NavButton from './NavButton';	
import { List, Row } from '../UIElements';	

const DesktopNav = () => (
	<MainHeader>
		<Row>
		</Row>
	</MainHeader>
)

export default DesktopNav;

const MainHeader = glamorous.div({
	height: `30vh`,
	width: `100%`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `flex-start`
})

const Logo = glamorous.div({
	height: 50,
	width: 50,
	borderRadius: `50%`,
	backgroundColor: `white`
})