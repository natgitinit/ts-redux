import React, { Component } from 'react';
import { RootStateOrAny, connect } from 'react-redux';
import '../Card.css';
interface Article {
    multimedia: {
        url: string;
    }[];
    url: string;
    headline: string[];
    byline: string;
    abstract: string;
}

interface ArticleCardProps {
    articles: Article[];
    dispatch: any;
}

class ArticleCard extends Component<ArticleCardProps> {

    generateArticleCards = () => {
        return this.props.articles.map((article, index) => {
                return (
                    <div className="card-container" key={index}>
                        <div className="card-title">{article.abstract} </div>
                    </div>
                )
        });
    };

    render() {
        return <div>{this.generateArticleCards()}</div>
    }
}

const mapStateToProps = (state: RootStateOrAny ) => {
    console.log("ArticlesREducer", state.articles.articles);
    return {
        articles: state.articles.articles,
    };
};

export default connect(mapStateToProps)(ArticleCard);

