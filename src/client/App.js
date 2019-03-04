import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  render() {
    const { count } = this.state;
    const { ssr = false } = this.props;

    const pageTitle = ssr ? (
      <h1>This page is server-side renderd</h1>
    ) : (
      <h1>This page is client-side renderd</h1>
    );

    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <a className="navbar-brand" href="/">
            What is SSR?
          </a>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/csr">
                Client-side rendered <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ssr">
                Server-side rendered
              </a>
            </li>
          </ul>
        </nav>

        <main role="main" className="container">
          <div className="jumbotron">
            {pageTitle}
            <p className="lead">
              Try view source and see what the browser actually receives!
            </p>
            <ul>
              <li>
                <a href="/csr">Client-side rendered React</a>
              </li>
              <li>
                <a href="/ssr">Server-side rendered React</a>
              </li>
            </ul>
          </div>
          <div className="h2">{count}</div>
          <div
            className="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group mr-2"
              role="group"
              aria-label="First group"
            >
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.incrementCount}
              >
                Increment
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.decrementCount}
              >
                Decrement
              </button>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }

  incrementCount() {
    this.setState(prevState => ({
      count: ++prevState.count
    }));
  }

  decrementCount() {
    this.setState(prevState => ({
      count: --prevState.count
    }));
  }
}

export default App;
