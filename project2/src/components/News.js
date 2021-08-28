import React, { Component } from 'react'
import NewsItem from './NewsItem'
import '../css/News.css'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country : 'in',
        pageSize : 8,
        category : "general"
    }
    static defaultProps = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
    }
    constructor(){
        super();    
        this.state = {
            articles : [],
            loading : false,
            page : 1,
        }
    }
    async updateNews(pageNo){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a8094ea426a04abc9bc2b9fdf40e1351&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
            articles : parseData.articles, 
            totalResults:parseData.totalResults,
            loading : false
        })
    }

    async  componentDidMount(){
        this.updateNews();

    }

    handlePreviousClick = async () =>{
       this.setState({page :this.state.page - 1});
        this.updateNews();
    }
    
    handleNextClick = async () =>{
        this.setState({page :this.state.page + 1});
        this.updateNews();  
    }
    render() {
        return (
            <div className="container my-3">
                <h1 className="headline text-center">News Monkey - Top HeadLine</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url} >
                            <NewsItem title={element.title ? element.title : ""}  description={element.description ? element.description : ""}  
                            imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/> 
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-info m-2" onClick={this.handlePreviousClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-info" onClick={this.handleNextClick} >Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
