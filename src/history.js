// in order to enable Links from react-router-dom
import { createMemoryHistory, createBrowserHistory } from 'history';

const history = process.env.NODE_ENV === 'test' ? createMemoryHistory() : createBrowserHistory();

export default history;
