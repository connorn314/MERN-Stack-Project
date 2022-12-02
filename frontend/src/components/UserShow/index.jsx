import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as userActions from '../../store/users'
import BindingIndex from '../BindingsIndex/BindingsIndex';
import './UserShow.css'

const UserShow = () => {
    const {userId} = useParams();
    const dispatch = useDispatch();

    const showUser = useSelector(state => state.users[userId])

    useEffect(() => {
        dispatch(userActions.getOneUser(userId))
    }, [])

    return (
        <div>
            {showUser && (
                <div id='user-info'>
                    <div>{showUser.username}</div>
                </div>
            )}
            <BindingIndex userId={userId} constraint="user"/>
        </div>
    )
}

export default UserShow;