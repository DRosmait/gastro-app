import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
// import { match } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

import { AppState } from '../store';
import { addReview } from '../store/reviews/actions';
import { DishProps } from '../components/Dish';
import { Review } from '../components/ReviewItem';
import DishInfo from '../components/DishInfo';
import ReviewForm from '../components/ReviewForm';

interface ReviewsPageProps extends RouteComponentProps<{id?: string}> {
    // match: match<{id?: string}>;
    dish?: DishProps;
    addReview: (newReview: Review) => void;
}


const ReviewPage: React.SFC<ReviewsPageProps> = ({ dish, addReview, history }) => {
    return dish 
        ? (
        <section className="nx-section">
            <div className="nx-container">
                <h1 className="nx-section__title">Write your review for this dish:</h1>
                <DishInfo { ...dish } />
                <ReviewForm { ...{dish, addReview, history} } />
            </div>
        </section>)
        : null;
};

const mapStateToProps = ({ dishes }: AppState, { match: { params }}: ReviewsPageProps) => ({
    dish: dishes.find(d => d.id === parseInt((params.id || '-1'), 10)),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addReview: (newReview: Review) => dispatch(addReview(newReview)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewPage);