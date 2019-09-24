import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../store';
import { removeReview } from '../store/reviews/actions';
import LastReview from '../components/LastReview';

const mapStateToProps = (state: AppState) => ({
    reviews: state.reviews,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    removeReview: (id: number) => dispatch(removeReview(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(LastReview);
