import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404!
        <br />
        <Link to="/">Go Back</Link>
    </div>
)

export default NotFoundPage;