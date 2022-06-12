import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './navigation.styles.scss'

const Navigation = () => {
	return (
		<Fragment>
			<div className='Navigation'>
				<Link className='Navigation-logo-container' to='/'><CrwnLogo className='Navigation-logo' /></Link>
				<div className='Navigation-links-container'>
					<Link className='Navigation-link' to='/shop'>SHOP</Link>
					<Link className='Navigation-link' to='/sign-in'>SIGN IN</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	)
}

export default Navigation