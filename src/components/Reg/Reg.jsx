import React from 'react'
import ys from './Reg.css'

class Reg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuNum: 1
        }
        this.state.setMenuNum = (num) => {
            this.setState({
                menuNum: num
            });
        }
    };
    render() {
        return (
            <div className={`${ys.overall} ${ys.clear}`}>
                <div className={ys.theme}>
                    <p className={ys.theme_text}>简书</p>
                </div>
                <div className={ys.from}>
                    <h4 className={ys.title}>
                        <span onClick={() => this.state.setMenuNum(0)}
                            className={`${ys.sign} ${this.state.menuNum === 0 ? ys.active : ys.sign}`}>登录</span>
                        <b> · </b>
                        <span onClick={() => this.state.setMenuNum(1)}
                            className={`${ys.sign} ${this.state.menuNum === 1 ? ys.active : ys.sign}`}>注册</span>
                    </h4>
                    <div style={{ display: this.state.menuNum === 1 ? 'block' : 'none' }}>
                        <div className={ys.dw}>
                            <i className={`${"iconfont"} ${ys.dwtb}`}>&#xe663;</i>
                            <input className={ys.input_prepend} placeholder="你的昵称" type="text" />
                        </div>
                        <div className={ys.dw}>
                            <i className={`${"iconfont"} ${ys.dwtb}`}>&#x3448;</i>
                            <input className={ys.input_prepend} placeholder="手机号" type="text" />
                        </div>
                        <div className={ys.dw}>
                            <i className={`${"iconfont"} ${ys.dwtb}`}>&#xe657;</i>
                            <input className={`${ys.input_prepend} ${ys.prepend}`} placeholder="设置密码" type="password" />
                        </div>
                        <div className={ys.reg}>
                            <p className={ys.reg_text}>注册</p>
                        </div>
                        <div className={ys.text_font}>
                            <p className={ys.font_t}>点击“注册”即表示您同意并愿意遵守简书</p>
                            <p className={ys.font_t}>
                                <span className={ys.font_active}>用户协议</span> 和
                                <span className={ys.font_active}> 隐私政策</span>
                            </p>
                        </div>
                        <div className={ys.more_sign}>
                            <h6>社交账号直接注册</h6>
                        </div>
                        <ul>
                            <li>
                                <i className={`${"iconfont"} ${ys.wx}`}>&#xe7e5;</i>
                            </li>
                            <li>
                                <i className={`${"iconfont"} ${ys.wx} ${ys.qq}`}>&#xebb4;</i>
                            </li>
                        </ul>
                    </div>
                    <div style={{ display: this.state.menuNum === 0 ? 'block' : 'none' }}>
                        <div className={ys.dw}>
                            <i className={`${"iconfont"} ${ys.dwtb}`}>&#x3448;</i>
                            <input className={ys.input_prepend} placeholder="手机号或邮箱" type="text" />
                        </div>
                        <div className={ys.dw}>
                            <i className={`${"iconfont"} ${ys.dwtb}`}>&#xe657;</i>
                            <input className={`${ys.input_prepend} ${ys.prepend}`} placeholder="密码" type="password" />
                        </div>
                        <div className={ys.clearfix}>
                            <div className={ys.remember}>
                                <input type="checkbox" checked="checked"/>
                                <span className={ys.remember_text}>记住我</span>
                            </div>
                            <div className={ys.forget}>
                                <span className={ys.forget_text}>登录遇到问题？</span>
                            </div>
                        </div>
                        <div className={`${ys.reg} ${ys.reg_other}`}>
                            <p className={ys.reg_text}>登录</p>
                        </div>
                        <div className={ys.more_sign}>
                            <h6>社交账号直接注册</h6>
                        </div>
                        <ul>
                            <li>
                                <i className={`${"iconfont"} ${ys.wx} ${ys.wb}`}>&#xe62f;</i>
                            </li>
                            <li>
                                <i className={`${"iconfont"} ${ys.wx}`}>&#xe7e5;</i>
                            </li>
                            <li>
                                <i className={`${"iconfont"} ${ys.wx} ${ys.qq}`}>&#xebb4;</i>
                            </li>
                            <li>
                                <span className={ys.qt}>其它</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Reg