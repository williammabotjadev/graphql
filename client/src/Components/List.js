import axios from 'axios'
import React, { Component } from 'react'

export default class List extends Component {
    
    state = {
        categoriesList: []
                              
    }

    onComponentDidMount() {
        const data = axios.get('https://api.chucknorris.io/jokes/categories');
        this.setState({categoriesList: data})
    }

    render() {

       
        return (
            <div>
            <ul>
                {
                    
                    this.state.categoriesList.map((categoryItem) => {
                        return <li key={categoryItem.toString()}>
                            {categoryItem.toString()}
                        </li>
                    })
                    
                }
                </ul>
            </div>
        )
    }
}
