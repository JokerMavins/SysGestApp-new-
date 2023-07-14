import {Outlet} from 'react-router-dom'
import PrivateHeader from './privateHeader'
import PrivateNav from './privateNav'

const PrivateRoot = () => {
    return(
        <div className='flex flex-row'>
              <PrivateNav />
            <div className='flex flex-col w-full'>
                <PrivateHeader />
                <Outlet />
            </div>
        </div>
    )
}

export default PrivateRoot