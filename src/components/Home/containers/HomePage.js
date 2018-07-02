import { connect } from 'react-redux';
import { compose } from 'recompose';
import { firebaseConnect } from 'react-redux-firebase';
import { setHiddenState } from '../../../actions/navbar.js';
import HomePage from '../HomePage';

const mapStateToProps = (state) => ({
	hidden: state.navbar.hidden
})
const mapDispatchToProps = {
	setHiddenState
};
export default compose(
  firebaseConnect([]),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);