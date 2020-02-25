import React from 'react';
import HeaderImg from '../../assets/no-comments.png';

const AboutUs = () => {
    return(
        <section>
             <h2>Get Anything Done!</h2>
            <img src={HeaderImg} width="70%" alt="" />
            <p>taskip help you to organize your weekdays in a awesome, flexible way.
            Dive into the details by adding comments or notes. 
            Whether it's for work, a side project or just for fun.</p>
        </section>
    )
}

export default AboutUs;