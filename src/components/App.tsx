import { Provider } from 'react-redux';
import { store } from '../state';
import ArticlesList from './ArticlesList';
import { Theme } from '@radix-ui/themes';

const App = () => {
  return (
  <Theme>
    <Provider store={store}>
      <div>
        <h1>Search For an Article</h1>
        <ArticlesList/>
      </div>
    </Provider>
  </Theme>
  );
};

export default App;
