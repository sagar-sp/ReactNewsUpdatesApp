import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div>
                <h1>This Is a News Component</h1>
                <NewsItem/> 
                <NewsItem/> 
                <NewsItem/> 
                <NewsItem/> 
                <NewsItem/> 
                <NewsItem/> 
            </div>
        )
    }
}

export default News
