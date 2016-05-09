import React, { Component, PropTypes } from 'react';

class Example extends Component {
  constructor() {
    super();

    this.state = {
      expanded: localStorage['demo-expanded'] ? true : false
    };
  }

  toggle = () => {
    localStorage['demo-expanded'] = !this.state.expanded;
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    let children;
    if (this.state.expanded) {
      children = (
        <div className="container">
          {this.props.children}
        </div>
      );
    }

    return (
      <div className="example">
        <h4 onClick={this.toggle}>
          <i className={this.state.expanded ? 'open' : ''}>
            <svg x="0px" y="0px" width="6.9px" height="10px" viewBox="0 0 6.9 10">
              <polygon points="5,3.1 1.9,0 0,1.9 3.1,5 0,8.1 1.9,10 6.9,5 "/>
            </svg>
          </i>
          <span>Demo</span>
        </h4>
        {children}
      </div>
    );
  }
}

export default Example;