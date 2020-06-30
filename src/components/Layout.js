import React from 'react';
import NavMenu from './NavMenu';

export default (props) => (
    <React.Fragment>
        <NavMenu/>
        <main className="app-container">
            {props.children}
        </main>
    </React.Fragment>
);
