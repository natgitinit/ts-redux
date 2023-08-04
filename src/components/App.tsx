import { Provider } from 'react-redux';
import { store } from '../state';
import ArticlesList from './ArticlesList';

const App = () => {
  return ( 
  <Provider store={store}>
    <div>
      <h1>Search For an Article</h1>
      <ArticlesList/>
    </div>
  </Provider>
  );
};

export default App;
