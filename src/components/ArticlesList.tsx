import { useState} from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

const ArticlesList: React.FC = () => {

    const [term, setTerm] = useState('');
    const { searchArticles } = useActions();
    const state = useSelector((state) => state);
    console.log(state);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchArticles(term);
    }

    return (
    <div>
        <form onSubmit={onSubmit}>
            <input />
            <button> Search</button>
        </form>
    </div>
    );
};

export default ArticlesList;