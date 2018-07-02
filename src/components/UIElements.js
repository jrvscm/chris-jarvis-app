import glamorous from 'glamorous';
import colors from '../colors';
import Beard from '../images/beard.png';

const { transparentPurple } = colors;

export const Logo = glamorous.div({
  height: 48,
  width: 48,
  transition: `all .35s ease`,
  cursor: `pointer`,
  background: `url(${Beard}) center center no-repeat`,
  backgroundSize: `contain`
})


export const List = glamorous.ul({
	display: `inline-flex`,
	flexDirection: `row`,
	flexWrap: `wrap`,
	alignItems: `center`,
	justifyContent: `center`,
	padding:0,
	margin: 0
})

export const Col = glamorous.div({
	display: `flex`,
	flexDirection: `column`,
	justifyContent: `center`,
	flexWrap: `wrap`,
	alignItems: `center`,
	width: `100%`
})

export const Row = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	justifyContent: `center`,
	alignItems: `center`,
	width: `100%`
})