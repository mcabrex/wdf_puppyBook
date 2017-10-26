import React from 'react';

export default class AllPuppies extends React.Component {
  //when this component mounts invoke whats inside(which we get from our AllPuppiesContainer)
  // componentDidMount(){
  //   this.props.onReceivePuppies()
  // }

  render () {
    // console.log('whats up doc', this.props)
    return (
      <div>
        <ul className="list-unstyled">
          {this.props.allPuppies.map(puppy=>{
            return (
              <li key={puppy.id}><a href="#">{puppy.name}</a></li>
            )
          })}
        </ul>
      </div>
    )
  }
}