import React from 'react';
import glamorous from 'glamorous';
import colors from '../../colors';

const NavBar = () => (
	<Container>
		<Col>
			<Row style={{justifyContent: `flex-start`}}>
				<Logo></Logo>
			</Row>
		</Col>
		<Col>
			<Row style={{justifyContent: `flex-end`}}>
				<NavButton />
				<NavButton />
				<NavButton />
				<NavButton />
			</Row>
		</Col>
	</Container>
)

export default NavBar;

const { transparentPurple, slateBlue } = colors;

const Container = glamorous.div({
	position: `fixed`,
	top: 0,
	left: 0,
	right: 0,
	backgroundColor: `${slateBlue}`,
	height: 100,
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `center`,
	paddingRight: `20%`,
	paddingLeft: `20%`
})

const Row = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	width: `100%`
})

const Col = glamorous.div({
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	width: `50%`
})

const NavButton = glamorous.button({
	height: 40,
	width: 120,
	margin: 10,
	cursor: `pointer`,
	backgroundColor: `${transparentPurple}`,
	border: `none`
})

const Logo = glamorous.button({
	height: 40,
	width: 120,
	margin: 10,
	cursor: `pointer`,
  webkitTransform: `skewX(-20deg)`,
  transform: `skewX(-20deg)`,
})

