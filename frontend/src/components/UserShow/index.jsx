import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as userActions from '../../store/users'
import BindingIndex from '../BindingsIndex/BindingsIndex';
import './UserShow.css'

const UserShow = () => {
    const {userId} = useParams();
    const dispatch = useDispatch();

    return (
        <div>
            <BindingIndex userId={userId} />
        </div>
    )
}

export default UserShow;