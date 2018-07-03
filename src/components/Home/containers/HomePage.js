import { connect } from 'react-redux';
import { compose } from 'recompose';
import { firebaseConnect } from 'react-redux-firebase';
import { setHiddenState, setScrollToContact } from '../../../actions/navbar.js';
import HomePage from '../HomePage';

const mapStateToProps = (state) => ({
	hidden: state.navbar.hidden,
	scrollToContact: state.navbar.scrollToContact
})
const mapDispatchToProps = {
	setHiddenState,
	setScrollToContact
};
export default compose(
  firebaseConnect([]),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);