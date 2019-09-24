import React from 'react';

import LastReviewSection from '../containers/LastReviewSection';

const Home: React.FC = () => {
    return <section className="nx-section">
        <div className="nx-container">
            <h1 className="nx-section__title">This is Super Burger Restaurant</h1>

            <LastReviewSection />
        </div>
    </section>
}

export default Home;