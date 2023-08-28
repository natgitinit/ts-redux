import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import ArticleCard from './ArticleCard';

const ArticlesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchArticles } = useActions();
    const { articles, error, loading } = useTypedSelector(
    (state) => state.articles
    );

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchArticles(term);
    };

    return (
        <div className="card-column">
            <form onSubmit={onSubmit}>
            <input value={term} onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading && articles.map((index) =>
                <div className="article-card" key={index}><ArticleCard/></div>
            )}
        </div>
    );
};

export default ArticlesList;
