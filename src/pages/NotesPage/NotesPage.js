import React, { Component } from 'react';
import './NotesPage.css'
import NavBar from '../../components/NavBar/NavBar'

class NotesPage extends Component {

/*--------------Event Handlers----------------*/

/*--------------Lifecycle Methods----------------*/

/*--------------Render Function----------------*/

render() {
    return (
        <div>
            <NavBar 
                user={this.props.user}
            />
            <h1>NotesPage</h1>
        </div>
    )
}

}

export default NotesPage