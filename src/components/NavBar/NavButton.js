import React from 'react';
import glamorous from 'glamorous';
import colors from '../../colors';
import { withRouter } from 'react-router-dom';
import { BLOG } from '../../constants/routes';

const NavButton = withRouter(({history, title, subTitle, path}) => {
	return(
		<Container onClick={() => history.push(path)}>
			<Title>
				{title}
			</Title>
			<SubTitle>
				{subTitle}
			</SubTitle>
		</Container>
	)
})

export default NavButton;

const { transparentPurple, white } = colors; 

const Container = glamorous.li({
	display: `flex`,
	flexDirection: `column`,
	justifyContent: `center`,
	alignItems: `center`,
	backgroundColor:`transparent`,
	margin: 10,
	padding: 5,
	width: 100,
	transform: `all .2s ease`,
	cursor: `pointer`,
	':hover': {
		backgroundColor: `${transparentPurple}`
	}
})

const Title = glamorous.h2({
	color: `${white}`,
	fontSize: 15,
	margin: 0
})

const SubTitle = glamorous.h3({
	color: `${white}`,
	fontSize: 8,
	margin: 0
})