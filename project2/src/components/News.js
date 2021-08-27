import React, { Component } from 'react'
import NewsItem from './NewsItem'
import '../css/News.css';

export class News extends Component {
    constructor(){
        super();    
        this.state = {
            articles : [],
            loading : false,
            page : 1,
        }
    }

    async  componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a8094ea426a04abc9bc2b9fdf40e1351&page=1&pageSize=20";
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({articles : parseData.articles, totalResults:parseData.totalResults})
    }

    handlePreviousClick = async () =>{
        console.log("prev")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a8094ea426a04abc9bc2b9fdf40e1351&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
           page : this.state.page - 1,
           articles : parseData.articles
        })
    }
    
    handleNextClick = async () =>{
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){
            
        }else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a8094ea426a04abc9bc2b9fdf40e1351&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parseData = await data.json()
            this.setState({
            page : this.state.page + 1,
            articles : parseData.articles
            })
        }   
    }
    render() {
        return (
            
            <div className="container my-3">
                <h1 className="headline">News Monkey Top HeadLine</h1>
                
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url} >
                            <NewsItem title={element.title ? element.title : ""}  description={element.description ? element.description : ""}  
                            imageurl={element.urlToImage} newsUrl={element.url} /> 
                        </div>
                    })}
                </div>
                    <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-info m-2" onClick={this.handlePreviousClick}> &larr; Previous</button>
                    <button type="button" className="btn btn-info" onClick={this.handleNextClick} >Next &rarr;</button>

                    </div>
            </div>
        )
    }
}

export default News
