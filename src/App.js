import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import Blogs from './Pages/DetailsInformations/Blogs/Blogs';
import SingleServices from './Pages/DetailsInformations/SingleServices/SingleServices';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import Join from './Pages/Home/Join/Join';
import Successful from './Pages/Home/Join/Successful';
import Reviews from './Pages/Home/Reviews/Reviews';
import Services from './Pages/Home/Services/Services';
import LiveTreatment from './Pages/LiveTreatment/LiveTreatment';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/services'>
              <Services></Services>
            </Route>
            <PrivateRoute exact path='/services/:id'>
              <SingleServices></SingleServices>
            </PrivateRoute>
            <Route path='/blogs'>
              <Blogs></Blogs>
            </Route>
            <Route path='/reviews'>
              <Reviews></Reviews>
            </Route>
            <PrivateRoute path='/livetreatment'>
              <LiveTreatment></LiveTreatment>
            </PrivateRoute>
            <PrivateRoute path='/join'>
              <Join></Join>
            </PrivateRoute>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/successful'>
              <Successful></Successful>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>


            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
