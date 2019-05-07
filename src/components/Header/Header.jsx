import React from 'react'
import styles from './Header.css'
class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    };
    toBack(){
        window.location.href = "#/index"
    }
    render(){
        return(
            <header className={styles.header}>
                <div className={styles.box}>
                    <span className={styles.text} onClick={this.toBack.bind(this)}>简书</span>
                    <div className={styles.box_center}>
                        <div className={styles.one} onClick={this.toBack.bind(this)}>
                            <i className={`${"iconfont"} ${styles.fx}`}>&#xe746;</i>
                            <span className={styles.sy}>首页</span>
                        </div>
                        <div className={styles.two}>
                            <i className={`${"iconfont"} ${styles.xz}`}>&#xe75e;</i>
                            <span className={styles.xzApp}>下载App</span>
                        </div>
                        <div className={styles.three}>
                            <input type="search" placeholder="搜索" className={styles.sousuo}/>
                            <i className={`${"iconfont"} ${styles.search}`}>&#xe61a;</i>
                        </div>
                        <div className={styles.four}>
                            <span className={`${styles.font} ${styles.zt}`}>Aa</span>
                            <div className={styles.zs}>
                                <i className={`${"iconfont"} ${styles.iconset}`}>&#xe676;</i>
                                <span className={styles.huiyuan}>beta</span>
                            </div>
                            <span className={`${styles.font} ${styles.dl}`}>登录</span>
                        </div>
                    </div>
                    <div className={styles.box_r}>
                        <div className={styles.reg}>
                            <p className={styles.reg_text}>注册</p>
                        </div>
                        <p className={styles.login}>
                            <i className={`${"iconfont"} ${styles.combinedshapecopy}`}>&#xe652;</i>
                            <span className={styles.login_text}>写文章</span>
                        </p>
                    </div>
                </div>
            </header>
        );
    }
}
export default Header