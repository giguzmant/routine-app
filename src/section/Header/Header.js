import React from 'react';
import './Header.scss';
import Welcome from '../Welcome/Welcome';
import Intro from '../Intro/Intro';

import './Header.scss';

const Header = () => {
    return(
        <section className="header">
        <Intro></Intro>
        <Welcome></Welcome>

        </section>
    )
}

export default Header;