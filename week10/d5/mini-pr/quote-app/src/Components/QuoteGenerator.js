import React, { Component } from 'react';
import quotes from './QuotesDatabase';

class QuoteGenerator extends Component {
    constructor() {
        super();
        this.state = {
            currentQuote: '',
            currentAuthor: '',
            usedQuotes: [],
        };
    }

    componentDidMount() {
        this.generateRandomQuote();
    }

    getRandomColor() {
        const colors = ['#FFE77A', '#8AAAE5', '#EE4E34', '#89ABE3', '#EA738D', '#E3B448', '#CBD18F', '#3A6B35', '#FFBE7B', '#6883BC', '#FC766A', '#AA96DA'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    generateRandomQuote() {
        const availableQuotes = quotes.filter((quote) => !this.state.usedQuotes.includes(quote));
        if (availableQuotes.length === 0) {
            // reset the usedQuotes array
            this.setState({ usedQuotes: [] });
        } else {
            const randomIndex = Math.floor(Math.random() * availableQuotes.length);
            const randomQuote = availableQuotes[randomIndex];
            this.setState({
                currentQuote: randomQuote.quote,
                currentAuthor: randomQuote.author,
                backgroundColor: this.getRandomColor(),

                usedQuotes: [...this.state.usedQuotes, randomQuote],
            });
        }
    }

    render() {
        const {
            currentQuote,
            currentAuthor,
            backgroundColor,
        } = this.state;

        document.body.style.backgroundColor = backgroundColor;


        return (

            <div className="quote-box">
                <h1 className="quote" style={{ color: backgroundColor }}>
                    "{currentQuote}"
                </h1>
                <p className="author" style={{ color: backgroundColor }}>
                    - {currentAuthor} -
                </p>
                <button
                    className="button"
                    onClick={() => this.generateRandomQuote()}
                    style={{ backgroundColor: backgroundColor }}
                >
                    New Quote
                </button>
            </div>
        );
    }
}

export default QuoteGenerator;
