import './App.css';
import SideMenu, { menuItems } from './components/Navigation/SideMenu';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import ACPVerForm from './components/ACPVerForm/ACPVerForm';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import AllSimCards from './pages/AllSimCards/AllSimCards';
import useToken from './hooks/useToken';
import ContextProvider from './contexts/ContextProvider';
import SimCardDetails from './pages/SimCardDetails/SimCardDetails';
import AddSimCards from './pages/AddSimCards/AddSimCards';
import ServiceCarriers from './pages/ServiceCarriers/ServiceCarriers';
import SimCardOperations from './pages/SimCardOperations/SimCardOperations';

// for test

// const Dashboard = () => <ACPVerForm />;
const Content = () => <h1>Content</h1>;
// const Courses = () => <h1>Content/Courses</h1>;
const Videos = () => <h1>Content/Videos</h1>;
const Design = () => <h1>Design</h1>;
const Content2 = () => <h1>Content2</h1>;
const Courses2 = () => <h1>Content/Courses 2</h1>;
const Videos2 = () => <h1>Content/Videos 2</h1>;
const Design2 = () => <h1>Design 2</h1>;

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken.token));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken;
}

function App() {
  const [inactive, setInactive] = useState(false);

  const { token, setToken } = useToken();

  // const token = getToken();
  // console.log(token);

  if (!token) {
    return <Login setToken={setToken}></Login>;
  }

  return (
    <div className='App'>
      <ContextProvider>
        <Router>
          <Switch>
            {/* <Route exact path={'/'}>
            <Login></Login>
          </Route> */}
            <Route>
              {/* <Switch> */}
              <SideMenu
                onCollapse={(inactive) => {
                  setInactive(inactive);
                }}
              />
              <div
                className={` ${
                  inactive ? 'containerSide inactive' : 'containerSide'
                }`}
              >
                <Route exact path={'/'}>
                  <Dashboard></Dashboard>
                </Route>
                <Route exact path={'/dashboard'}>
                  <Dashboard></Dashboard>
                </Route>
                <Route path={'/dashboard/simCards/allSimCard'}>
                  <AllSimCards></AllSimCards>
                </Route>
                <Route path={'/dashboard/simCardDetails/:simId'}>
                  <SimCardDetails></SimCardDetails>
                </Route>
                <Route path={'/dashboard/simCards/addSimCards'}>
                  <AddSimCards></AddSimCards>
                </Route>
                <Route path={'/dashboard/simCards/simCardOperations'}>
                  <SimCardOperations></SimCardOperations>
                </Route>
                <Route path={'/dashboard/simCards/serviceCarriers'}>
                  <ServiceCarriers></ServiceCarriers>
                </Route>
                <Route exact path={'/dashboard/simCards/phonePlans'}>
                  <Content2 />
                </Route>
                <Route path={'/dashboard/simCards/simCardReturns'}>
                  <Courses2 />
                </Route>
                <Route path={'/dashboard/devices/allDevices'}>
                  <Videos2 />
                </Route>
                <Route path={'/dashboard/devices/deviceReturns'}>
                  <Design2 />
                </Route>
                <Route path={'/dashboard/vendors/simCardsOrders'}>
                  <Design2 />
                </Route>
                <Route path={'/dashboard/vendors/deviceOrders'}>
                  <Design2 />
                </Route>
                <Route path={'/dashboard/operations'}>
                  <Design2 />
                </Route>
                <Route path={'/dashboard/subscribers'}>
                  <Design2 />
                </Route>
                <Route path={'/dashboard/applications'}>
                  <Design2 />
                </Route>
                <Route path={'/dashboard/distributors'}>
                  <Design2 />
                </Route>
                <Route path={'/dashboard/report'}>
                  <Design2 />
                </Route>
                <Route path={'/dashboard/users'}>
                  <Design2 />
                </Route>
                <Route path={'/dashboard/settings'}>
                  <Design2 />
                </Route>
                <Route path={'/logout'}>
                  <Design2 />
                </Route>
              </div>
              {/* </Switch> */}
            </Route>
          </Switch>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
