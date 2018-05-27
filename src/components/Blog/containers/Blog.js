import { connect } from 'react-redux';
import { compose } from 'recompose';
import { firebaseConnect, getVal } from 'react-redux-firebase';

import Blog from '../Blog';

const mapStateToProps = (state) => ({
	posts:	getVal(state.firebase, 'data/posts')
})
const mapDispatchToProps = {
};
export default compose(
  firebaseConnect(['posts']),
  connect(mapStateToProps, mapDispatchToProps)
)(Blog);