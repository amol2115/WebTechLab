// Save as: FullLifecycleDemo.jsx

import React, { Component } from 'react';

class FullLifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor: Initialization');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: Sync props to state if needed');
    return null; // usually return null unless updating state
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Deciding whether to re-render');
    return true; // if false, skip render and componentDidUpdate
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Capture info before DOM changes');
    return null; // can return info like scroll position
  }

  componentDidMount() {
    console.log('componentDidMount: Component mounted');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Component updated');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component will unmount');
  }

  render() {
    console.log('Render: Rendering the UI');
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default FullLifecycleDemo;
