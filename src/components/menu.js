import React from 'react';
import '../menu.css';
import { NavLink } from 'react-router-dom';
function Menu(){
    const menuItems=[
        {name : 'DashBoard' , path:'/'},
        {name : 'Projects' , path:'/projects'},
        {name: 'teams' , path:'/teams'},
        {name: 'Calender' , path:'/calender'},
        {name : 'Documents' , path:'/documents'},
        {name : 'Reports' , path:'/reports'},
        {name : 'Settings' , path:'/Settings'}
    ];
    return(
        <>
        <div className='menu-container'>
            <div className='menuList'>
                <header className='logo'><h2>LoGo</h2>
                </header>
                <ul className='ul-menu'>
                    {
                        menuItems.map((item)=>(<li key={item.path}>
                            <NavLink to={item.path}
                            clasName={({isActive})=> isActive ? 'active' : undefined} className='nav-link'>
                                {item.name}
                            </NavLink>
                         
                        </li>))
                    }
                </ul>

            </div>
        </div>
        </>
    );
}
export default Menu;
// import React from 'react';
// import './menu.css';
// function Menu() {
//     const menuList=['DashBoard','Projects','Teams','Calender','Documents','Reports'];
//     return (
//         <>
//         <div className='menu-container'>
//             <div className='menuList'>
//                 <header className='logo'><h2>LoGo</h2></header>
//                 <ul>
//                     {menuList.map((menuItem,index)=>(
//                         <li key={index}>{menuItem}</li>
//                     ))}
//                 </ul>
//             </div>
//             <div className='color'>
                   
//                 </div>
//         </div>
//         </>
//     );

// }
// export default Menu
