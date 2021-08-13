import './App.css';
// import SearchBar from "./Components/Search/";
// import  datas from "./gifs";
import Search from './pages/search/';
import { Provider } from  'react-redux';
import { store } from "./redux/store"
import TrendingPage from './pages/trending';
import { BrowserRouter, Switch, Route } from "react-router-dom";



function App() {

  return (
    <div className="App">
      <h1>Search</h1>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Search}/>  
            <Route path="/trending" component={TrendingPage}/>
            <Route path="/search" component={Search}/>
          </Switch>
        </BrowserRouter>

      </Provider>
      {/* {datas.filter(data=> (data.rating==='g')).map(data =>
          <SearchBar url={data.url} title= {data.title} rating={data.rating} />
      )} */}

      {/* {datas.map(data => (data.rating ==='g') &&
          <SearchBar url={data.url} title= {data.title} rating={data.rating} />
      )} */}

      
    </div>

  );
}

export default App;
