import React from 'react';
import './Profile.css'
import Bio from './Bio';
import Skills from './Skills';
import Social from './Social';
class Profile extends React.Component {
    render(){
        return (
            <div className="Container">
                <Bio/>
                <Skills skillA="JavaScript" skillB="Python" skillC="Typescript"/>
                <Social/>
            </div>
        );
    }
}
 export default Profile;