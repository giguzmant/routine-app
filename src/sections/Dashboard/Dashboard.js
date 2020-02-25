import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {   faCog,
           faBell,
           faChartPie, 
           faInbox, 
           faUserCircle,
           faSearch,
           faAngleDown

        } from '@fortawesome/free-solid-svg-icons';
        
import './Dashboard.scss';
import Money from '../../assets/money.png';
import Winner from '../../assets/winner.png';
import News from '../../components/News/News';

const news = [{
    title: "Global stock markets plunge on coronavirus fears",
    img: Money
},
{
    title: "Winner's Bag: Patrick Reed, World Golf",
    img: Winner
    
}
]

const Dashboard = () => {
    return(
        <section style={{backgroundColor: "#f0f3fb"}}>
        <div>
            <div className="dashboard-side">
                <div className="dashboard-side-logo">
                    <h4>tskp</h4>
                </div>
                <div className="dashboard-side-icons">
                    <FontAwesomeIcon icon={faCog} />
                    <FontAwesomeIcon icon={faChartPie}/>
                    <FontAwesomeIcon icon={faInbox}/>
                    <FontAwesomeIcon icon={faUserCircle}/>
                </div>
            </div>
            <div className="dashboard">
                <div className="dashboard-content">
                    <div>
                        <p>Welcome</p>
                        <h3>Activity Dashboard</h3>
                        <div>
                            <FontAwesomeIcon icon={faBell}/>
                            <FontAwesomeIcon icon={faSearch}/>
                        </div>
                    </div>
                </div>
                <div className="dashboard-news">
                    <div className="dashboard-news-top">
                        <div className="dashboard-news-title">
                            <h4>News</h4>
                            <p>24 Feb, 2020</p>
                        </div>
                        <div className="dashboard-news-popular">
                            <h4>Popular</h4>
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </div>
                    </div>
                    <News news={news}/>
                </div>
            </div>
        </div>
        </section>
    )

}

export default Dashboard;