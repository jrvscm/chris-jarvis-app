import { connect } from 'react-redux';
import { compose } from 'recompose';
import { firebaseConnect } from 'react-redux-firebase';
import HomePage from '../HomePage';

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = {
};
export default compose(
  firebaseConnect([]),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);