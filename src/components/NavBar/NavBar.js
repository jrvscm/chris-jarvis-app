import React, { Component }from 'react';
import glamorous from 'glamorous';
import colors from '../../colors';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

class NavBar extends Component {
	componentDidMount() {
		const { updateDimensions } = this.props;
		updateDimensions(window.innerWidth)
		window.addEventListener('resize', () => updateDimensions(window.innerWidth))
	}

	componentWillUnmount() {
		const { updateDimensions } = this.props;
		window.removeEventListener('resize', () => updateDimensions(window.innerWidth))
	}

	render() {
		const { dimensions, hidden, setHiddenState } = this.props;
		const renderNav = dimensions > 820 ? (<DesktopNav />) : (<MobileNav hidden={hidden} setHiddenState={setHiddenState} />)

		return(
			<Container>
				{ renderNav }
			</Container>
		)
	}
}

export default NavBar;

const Container = glamorous.div({
	position: `fixed`,
	top: 0,
	left: 0,
	right: 0,
	backgroundColor: colors.themeGrey,
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `center`,
	borderBottom: `1px solid ${colors.themeOrange}`
})
