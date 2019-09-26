import React, { useState, FormEvent } from 'react';
import { History } from 'history';

import { Review } from './ReviewItem';
import { DishProps } from './Dish';

export interface ReviewFormProps {
    addReview: (newReview: Review) => void;
    dish: DishProps;
    history: History;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ dish, addReview, history }) => {
    const [ userName, setUserName ] = useState('');
    const [ reviewText, setReviewText ] = useState('');
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        addReview({
            product: dish,
            userName,
            reviewText,
            date: Date.now(),
        });

        history.push('/');
    }

    return <form className="nx-review-form" onSubmit={onSubmit}>
        <table className="nx-review-form__table">
            <tbody>
                <tr>
                    <td>
                        <label htmlFor="username">Your name:</label>
                    </td>
                    <td>
                        <input
                            type="text"
                            name="userName"
                            className="nx-review-form__name"
                            value={userName}
                            onChange={({ target }) => setUserName(target.value)}
                        />
                    </td>
                </tr>

                <tr>
                    <td>
                        <label htmlFor="reviewText">Review:</label>
                    </td>
                    <td>
                        <textarea
                            name="reviewText"
                            className="nx-review-form__review-area"
                            value={reviewText}
                            onChange={({ target }) => setReviewText(target.value)}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
        <button className="nx-review-form__submit" type="submit">Submit</button>
    </form>
}

export default ReviewForm;