import React, { Component } from 'react';
import { RootStateOrAny, connect } from 'react-redux';
import '../Card.scss';
interface Article {
    multimedia: {
        url: string;
    }[];
    url: string;
    headline: string[];
    lead_paragraph: string;
    abstract: string;
}

interface ArticleCardProps {
    articles: Article[];
    dispatch: any;
}

class ArticleCard extends Component<ArticleCardProps> {

    generateArticleCards = () => {
        return this.props.articles.map ((article) => {
                let imgResult = article.multimedia[2].url
                if(imgResult) {
                    return (
                        <div className="card-container">
                            <img src={imgResult}  alt="article-url" className="card-img" />
                            <div className="card-title">{article.abstract} </div>
                            <div className="card-paragraph">{article.lead_paragraph} </div>
                        </div>
                    )
                } else {
                    return;
                }
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

