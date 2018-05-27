import glamorous from 'glamorous';
import colors from '../colors';

const { transparentPurple } = colors;

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

export const Logo = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `center`,
	minHeight: 80,
	minWidth: 80,
	borderRadius: `50%`,
	margin: 10,
	cursor: `pointer`,
  backgroundColor: transparentPurple,
  transition: `all .25s ease`,
  ':hover': {
  	backgroundColor: `white`
  }
})

