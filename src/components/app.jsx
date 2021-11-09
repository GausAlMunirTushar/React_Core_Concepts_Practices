import React, {Component} from 'react'
import Profile from './profile/Profile'
import Skills from './profile/Skills'
class App extends Component{
    render(){
        return (
            <div>
                <Profile />
                <h3>List of Programmers</h3>
                <p>Mr Gaus</p>
                <Skills />
                <p>Mr Tushar</p>
                <Skills />
            </div>
        )
    }
}
export default App