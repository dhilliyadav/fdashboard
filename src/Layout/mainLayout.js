import React from 'react';
import '../MainLayout.css';
import  Menu from '../components/menu';
function MainLayout({children}){
    return(<React.Fragment>
        <div className="main-Layout">
            <Menu />
            <div className='page-Content'>
                {children}
            </div>
        </div>
    </React.Fragment>);
}
export default MainLayout;