import React, {Component} from 'react';
import './App.css';

class Quotes extends Component {
    state = {
        quotes: []
    }
    fillQuotes = () => {
        this.state.quotes.push({
                id: 1,
                quote: "“One cannot think well, love well, sleep well, if one has not dined well.”",
                author: "Virginia Wolf",
                title: "A Room of One's Own"
        })
        this.state.quotes.push({
                id: 2,
                quote: "“Ask not what you can do for your country. Ask what’s for lunch.”",
                author: "Orson Welles",
                title: "-"
        })
        this.state.quotes.push({
                id: 3,
                quote: "“After a good dinner one can forgive anybody, even one's own relations.”",
                author: "Oscar Wildes",
                title: "A Woman of No Importance"
        })
        this.state.quotes.push({
                id: 4,
                quote: "“Seize the moment. Remember all those women on the 'Titanic' who waved off the dessert cart.”",
                author: "Erma Bombeck",
                title: "-"
        })
        this.state.quotes.push({
                id: 5,
                quote: "“There is no love sincerer than the love of food.” ",
                author: "George Bernard Shaw",
                title: "Man and Superman"
        })
    }

    loqQuotes = () => {
        console.log(
            this.state.quotes
        )
    }

    renderQuotes = () => {
        return this.state.quotes.map((quo) => {
            return (
                <blockquote className="blockquote mb-0" key={quo.id}>
                    <p>
                        {quo.quote}
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                            {quo.author} <cite title={quo.title}>{quo.title}</cite>
                        </small>
                    </footer>
                    <br/>
                </blockquote>
            );
        });
    }
    
    render() {
        return (
        <div>
            {this.fillQuotes()}
            {this.loqQuotes()}
            {this.renderQuotes()}
        </div>
        )
    };
}

export default Quotes;