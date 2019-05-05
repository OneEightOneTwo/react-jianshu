import React from 'react'
import { connect } from 'dva';
import Header from '../../../components/Header/Header'
import UserDetails from '../../../components/UserDetails/UserDetails'

function UserList(){
    return(
        <div>
            <Header />
            <UserDetails />
        </div>
    );
}
UserList.prototype = {

};
export default connect()(UserList);