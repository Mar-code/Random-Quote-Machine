import React from "react";
import "./styles.css";

export default class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
    this.handleSend = this.handleSend.bind(this);
    this.fetchquotes = this.fetchquotes.bind(this);
  }

  fetchquotes() {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const randomfig = Math.floor(Math.random() * 400);
        document.getElementById("text").innerHTML = `${data[randomfig].text}`;
        document.getElementById(
          "author"
        ).innerHTML = `--${data[randomfig].author}`;
      });
  }

  handleSend() {
    var obj = `${document.getElementById("text").innerHTML}`;
    var authobj = `${document.getElementById("author").innerHTML}`;
    this.setState({
      quote: obj,
      author: authobj
    });
  }

  componentDidMount() {
    this.fetchquotes();
  }

  render() {
    const Quoted = this.state.quote;
    const Auth = this.state.author;

    return (
      <div className="Quote">
        <blockquote id="text"></blockquote>
        <h5 id="author"> </h5>
        <button
          className="btn btn-default"
          id="new-quote"
          onClick={this.fetchquotes}
        >
          New Quote
        </button>

        <a
          onClick={this.handleSend}
          href={
            "https://twitter.com/intent/tweet?text=" +
            encodeURIComponent('"' + Quoted + '" -' + Auth)
          }
          target="_[whatever]"
          rel="noopener noreferrer"
          id="tweet-quote"
        >
          <button className="btn btn-primary tweet">
            <i className="fab fa-twitter"></i>Tweet Quote
          </button>
        </a>
      </div>
    );
  }
}
