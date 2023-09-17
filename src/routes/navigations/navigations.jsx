import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/shopping-basket-svgrepo-com.svg';
import {ReactComponent as CrwnBag} from '../../assets/shopping-bag-svgrepo-com.svg'
import './navigations.scss'
const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link to={'/'} className='logo-container'>
                    <CrwnLogo />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to={'/shop'}>
                        SHOP
                    </Link>
                    <Link className='nav-link' to={'/contact'}>
                        CONTACT
                    </Link>
                    <Link className='nav-link' to={'/signin'}>
                        SIGN IN
                    </Link>
                    <Link className='nav-link' to={'/bagshop'}>
                        <CrwnBag/>
                    </Link>
                </div>
                
            </div>
            <Outlet />

        </Fragment>
    )
}
export default Navigation;
