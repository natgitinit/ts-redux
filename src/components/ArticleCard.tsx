import React, { Component } from 'react';
import { RootStateOrAny, connect } from 'react-redux';

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
                    <div> {article.abstract} </div>
                )
        });
    };

    render() {
        return <div itemsPerRow={3} size="medium">{this.generateArticleCards()}</div>
    }
}

const mapStateToProps = (state: RootStateOrAny ) => {
    console.log("ArticlesREducer", state.articles.articles);
    return {
        articles: state.articles.articles,
    };
};

export default connect(mapStateToProps)(ArticleCard);

