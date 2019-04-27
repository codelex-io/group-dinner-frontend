import React, {Component} from 'react';
import './App.css';

class Quotes extends Component {
    state = {
        quotes: []
    }
    fillQuotes = () => {
        this.state.quotes.push({
            obj1: {
                quote: "“One cannot think well, love well, sleep well, if one has not dined well.”",
                author: "Virginia Wolf",
                title: "A Room of One's Own"
            }
        })
        this.state.quotes.push({
            obj2: {
                quote: "“Ask not what you can do for your country. Ask what’s for lunch.”",
                author: "Orson Welles",
                title: "-"
            }
        })
    }

    renderQuotes = () => {
        return this.state.dinners.map((quo) => {
            return (
                <blockquote className="blockquote mb-0">
                    <p>
                        {quo.quote}
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                            {quo.author} <cite title={quo.title}>{quo.title}</cite>
                        </small>
                    </footer>
                </blockquote>
            );
        });
    }
    
    render() {
        return (
        <div>
            {this.fillQuotes()}
            {this.renderQuotes()}
        </div>
        )
    };
}

export default Quotes;