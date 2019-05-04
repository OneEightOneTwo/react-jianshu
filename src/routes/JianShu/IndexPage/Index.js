import React from 'react';
import {connect} from 'dva';
import Header from '../../../components/Header/Header'
import Main from '../../../components/Main/Main'
import Footer from '../../../components/Footer/Footer'

function Index(){
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
Index.prototype = {

};
export default connect()(Index);