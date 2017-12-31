import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1>Welcome to Mastermind!</h1>
            <p>
                To play
                <Link to="/login">login</Link>
                or
                <Link to="/sign-up">sign up</Link>
            </p>
        </div>
    )
};

export default Home;