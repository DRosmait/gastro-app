import React from 'react';

import ReviewItem, { Review } from './Review';

export interface LastReviewProps {
    reviews: Review[];
}

const LastReview: React.FC<LastReviewProps> = ({ reviews }) => {
    return <div className="nx-last-reviews">
        <h2 className="nx-last-reviews"></h2>
        <ul className="nx-review-list">
            {
                reviews.map((r, i) => <ReviewItem review={r} key={i} />)
            }
        </ul>
    </div>
};

export default LastReview;