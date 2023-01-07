import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home'
import Bookmarks from './Pages/Bookmarks/Bookmarks';
import store from './store'
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path={'/'} element={<Home path='random' />} />
            <Route path={'/home'} element={<Home path='random' />} />
            <Route path={'/bookmarks'} element={<Bookmarks />} />
            <Route path='*' element={<div>Page Not Found  <Link to='/'>Home</Link> </div>} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
