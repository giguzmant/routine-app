import React from 'react';


const WalkingRunning = props => {
    return(
        <section>
        {props.walkInfo.map(info => {
            return <div key={info.date + info.distance}>
                    <h3>{info.distance}</h3>
                    <p>{info.date}</p>
            </div>
        })}
        </section>
    )
}

export default WalkingRunning;