import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const ArticlesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchArticles } = useActions();
    const { data, error, loading } = useTypedSelector(
    (state) => state.articles
    );

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchArticles(term);
    };

    return (
    <div>
        <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
    );
};

export default ArticlesList;
