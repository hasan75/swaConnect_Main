import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo/swaconnect.png';
// import user from "../../assets/user.jpg";
import MenuItem from './MenuItem';
/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    name: 'Dashboard',
    exact: true,
    to: '/dashboard',
    iconClassName: 'bi bi-speedometer2',
  },
  {
    name: 'SIM Cards',
    exact: true,
    to: '#',
    iconClassName: 'bi bi-sim',
    subMenus: [
      { name: 'ALL SIM Cards', to: '/dashboard/simCards/allSimCard' },
      { name: 'Add SIM Cards', to: '/dashboard/simCards/addSimCards' },
      { name: 'Service Carrier', to: '/dashboard/simCards/serviceCarriers' },
      { name: 'Phone Plans', to: '/dashboard/simCards/phonePlans' },
      { name: 'SIM Cards Returns', to: '/dashboard/simCards/simCardReturns' },
    ],
  },
  {
    name: 'Devices',
    exact: true,
    to: '#',
    iconClassName: 'bi bi-phone',
    subMenus: [
      { name: 'ALL Devices', to: '/dashboard/devices/allDevices' },
      { name: 'Device Returns', to: '/dashboard/devices/deviceReturns' },
    ],
  },
  {
    name: 'Vendors',
    exact: true,
    to: '#',
    iconClassName: 'bi bi-people',
    subMenus: [
      { name: 'SIM Crads Orders', to: '/dashboard/vendors/simCardsOrders' },
      { name: 'Device Orders', to: '/dashboard/vendors/deviceOrders' },
    ],
  },
  {
    name: 'Operations',
    to: '/dashboard/operations',
    iconClassName: 'bi bi-sun',
  },

  {
    name: 'Subscribers',
    to: '/dashboard/subscribers',
    iconClassName: 'bi bi-person-check',
  },
  {
    name: 'Applications',
    to: '/dashboard/applications',
    iconClassName: 'bi bi-flower1',
  },
  {
    name: 'Distributors & Agents',
    to: '/dashboard/distributors',
    iconClassName: 'bi bi-person-bounding-box',
  },
  {
    name: 'Reports',
    to: '/dashboard/report',
    iconClassName: 'bi bi-x-octagon',
  },
  { name: 'Users', to: '/dashboard/users', iconClassName: 'bi bi-person' },
  { name: 'Settings', to: '/dashboard/settings', iconClassName: 'bi bi-gear' },
  { name: 'Logout', to: '/logout', iconClassName: 'bi bi-power' },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll('.sub-menu').forEach((el) => {
      el.classList.remove('active');
    });
  };

  /*just a little improvement over click function of menuItem
    no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((el) => {
      el.addEventListener('click', (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove('active'));
        el.classList.toggle('active');
        console.log(next);
        if (next !== null) {
          next.classList.toggle('active');
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? 'inactive' : ''}`}>
      <div className='top-section'>
        <div className='logo'>
          <img src={logo} alt='webscript' />
        </div>
        <div onClick={() => setInactive(!inactive)} className='toggle-menu-btn'>
          {inactive ? (
            <i class='bi bi-arrow-right-square-fill'></i>
          ) : (
            <i class='bi bi-arrow-left-square-fill'></i>
          )}
        </div>
      </div>

      <div className='divider'></div>

      <div className='main-menu'>
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>
      {/* SETTINGS  */}

      {/* END  */}
    </div>
  );
};

export default SideMenu;
