import React, { Component } from 'react'

export class ClassComponent extends Component {
  render() {
      console.log(this.props);
    return (
      <div>
          {/* Refrencing a Props passed to a Classcomponent */}
          <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default ClassComponent