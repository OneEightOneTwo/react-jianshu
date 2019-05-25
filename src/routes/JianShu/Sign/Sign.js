import React from 'react'
import { connect } from 'dva'
import Reg from '../../../components/Reg/Reg'

function Sign(){
    return(
        <div style={{height:'100%'}}>
            <Reg />
        </div>
    );
}
Sign.prototype = {

};
export default connect()(Sign);