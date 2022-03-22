import './App.css';
// import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home/Home'
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage'
import LoginForm from './Pages/LoginForm/LoginForm'
import SignUpForm from './Pages/SignUpForm/SignUpForm'
import SummaryPage from './Pages/SummaryPage/SummaryPage'
import ProductPage from './Pages/ProductPage/ProductPage'
import CustomerPage from './Pages/CustomerPage/CustomerPage'
import MarketerHome from './Pages/MarketerHome/MarketerHome'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        
        <Switch >
          <Route exact path="/cat" component={CategoriesPage} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/summary" component={SummaryPage} />
          <Route exact path="/product/:name" component={ProductPage} />
          <Route exact path="/mhome" component={MarketerHome} />
          <Route exact path="/cpage" component={CustomerPage} />
            {/* <Route exact path="/product" component={ProductPage}></Route> */}
          {/* </Route> */}
            
          <Route path="/" component={Home} />
        </Switch> 
       {/* <ProductPage /> */}
      </div>
    </Router>
    
  );
}

export default App;
