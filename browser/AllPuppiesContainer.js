import AllPuppies from './AllPuppies';
import React from 'react';
import { connect } from 'react-redux';
import {receivePuppies,loadPuppies} from './action-creators'

//mapStateToProps is a special function that connect takes as a first argument
//it literally maps the state from our store (or whatever we wanna grab from the state) to the props for the component as an object that we will pass on through connect
const mapStateToProps = function(state){
    return {
        allPuppies : state.allPuppies
    }
}

//connect creates a container component that will contain whatever you pass into it (AllPuppies in this case)
//returns a function which will be given the component that connect will pass props too via this.props
//now if you import this component into the index or main or whatever (as <AllPuppiesContainer />) and render it, itll render AllPuppies 
export default connect(mapStateToProps)(AllPuppies)

// const hardCodedData = [
//     { id: 1, name: 'Cody' },
//     { id: 2, name: 'Ben' },
//     { id: 3, name: 'Bubba' }
//   ];

//mapDispatchToProps is a special function that connect takes as a second argument
//it literally maps a dispatch for the component as a method through that components props
//we load this through componentDidMount?
//what exactly is the stepbystep process from mapDispatchToProps?
// const mapDispatchToProps = function(dispatch){
    //     return {
        //         onReceivePuppies: function(){
            //             const action = loadPuppies();
            //             dispatch(action)
//         }
//     }
// }