import React from 'react';


class Stats extends React.Component {
    render(){
        return(
            <div>
                <div id="container-stats">
                    <div className="stats">
                        <h4>Reviews</h4>
                        
                            <p className="sentiment-numbers1">1,281</p>
                    </div>
                    
                    <div className="stats">
                        <h4>Average Rating</h4>
                        <p>4.6</p>
                        <div className="glowStats"></div>
                        <div className="glowStats"></div>
                        <div className="glowStats"></div>
                        <div className="glowStats"></div>
                    </div>
                    <div className="stats">
                        <h4>Sentiment Analysis</h4>
                            <div id="sentiment-container">
                            <p className="sentiment">Positive Reviews:</p>    
                            <p className="sentiment sentiment-numbers1">960</p>    
                            <p className="sentiment">Neutral Reviews:</p>    
                            <p className="sentiment sentiment-numbers2">122</p>    
                            <p className="sentiment">Negative Reviews:</p>
                            <p className="sentiment sentiment-numbers3">321</p>
                            </div>    
                    </div>
                </div>
            </div>
        )
    }
}

export default Stats;