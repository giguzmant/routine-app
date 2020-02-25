import React from 'react';
import './News.scss';

const News = (props) => {
    return(
        <section className="dashboard-news-cards">
            {props.news.map(info=>{
                return <div className="dashboard-news-card-container">
                            <div className="dashboard-news-card-img">
                                <img src={info.img} width="100%" alt=""/>
                            </div>
                            <div className="dashboard-news-card-info">
                                <h5 className="dashboard-news-card-title">{info.title}</h5>
                                <p className="dashboard-news-card-content">{info.content}</p>
                            </div>

                      </div>
            })
            }
        </section>
    )
}

export default News;