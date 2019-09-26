import React from 'react';

import ReviewItem, { Review } from './ReviewItem';

export type LastReviewProps = {
    reviews: Review[];
    removeReview: (id: number) => void;
}

const LastReview: React.FC<LastReviewProps> = ({ reviews }) => {
    return <div className="nx-last-reviews">
        <h2 className="nx-last-reviews">Last reviews from our gasts:</h2>
        <ul className="nx-review-list">
            {
                reviews.map((r, i) => <ReviewItem { ...r } key={i} />)
            }
        </ul>
    </div>
};

export default LastReview;