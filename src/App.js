import './App.css';
import SideMenu, { menuItems } from './components/Navigation/SideMenu';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import ACPVerForm from './components/ACPVerForm/ACPVerForm';
import Login from './pages/Login/Login';

const Dashboard = () => <ACPVerForm />;
const Content = () => <h1>Content</h1>;
const Courses = () => <h1>Content/Courses</h1>;
const Videos = () => <h1>Content/Videos</h1>;
const Design = () => <h1>Design</h1>;
const Content2 = () => <h1>Content2</h1>;
const Courses2 = () => <h1>Content/Courses 2</h1>;
const Videos2 = () => <h1>Content/Videos 2</h1>;
const Design2 = () => <h1>Design 2</h1>;
function App() {
  const [inactive, setInactive] = useState(false);
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path={'/'}>
            <Login></Login>
          </Route>

          <Route>
            {/* <Switch> */}
            <SideMenu
              onCollapse={(inactive) => {
                console.log(inactive);
                setInactive(inactive);
              }}
            />
            <div className={`containerSide ${inactive ? 'inactive' : ''}`}>
              {menuItems.map((menu, index) => (
                <>
                  <Route key={menu.name} exact={menu.exact} path={menu.to}>
                    <h1>{menu.name}</h1>
                  </Route>
                  {menu.subMenus && menu.subMenus.length > 0
                    ? menu.subMenus.map((subMenu, i) => (
                        <Route key={subMenu.name} path={subMenu.to}>
                          <h1>{subMenu.name}</h1>
                        </Route>
                      ))
                    : null}
                </>
              ))}
            </div>
            {/* </Switch> */}
          </Route>

          {/* <Route exact path={"/content"}>
              <Content />
            </Route>
            <Route path={"/content/courses"}>
              <Courses />
            </Route>
            <Route path={"/content/videos"}>
              <Videos />
            </Route>
            <Route path={"/design"}>
              <Design />
            </Route>
            <Route exact path={"/content-2"}>
              <Content2 />
            </Route>
            <Route path={"/content-2/courses"}>
              <Courses2 />
            </Route>
            <Route path={"/content-2/videos"}>
              <Videos2 />
            </Route>
            <Route path={"/design-2"}>
              <Design2 />
            </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
