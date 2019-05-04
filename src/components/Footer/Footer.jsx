import React from 'react'
import style from './Footer.css'

const data = {
    text: '关于简书',
    text2: '联系我们',
    text3: '加入我们',
    text4: '简书出版',
    text5: '品牌与微标',
    text6: '帮助中心',
    text7: '合作伙伴',
    dot: '·'
}
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommend: []
        }
    }
    render() {
        return (
            <footer className={style.clearfix}>
                <div className={style.center}>
                    <a href="###" className={style.a}>{data.text}</a>
                    <em>{data.dot}</em>
                    <a href="###" className={style.a}>{data.text2}</a>
                    <em>{data.dot}</em>
                    <a href="###" className={style.a}>{data.text3}</a>
                    <em>{data.dot}</em>
                    <a href="###" className={style.a}>{data.text4}</a>
                    <em>{data.dot}</em>
                    <a href="###" className={style.a}>{data.text5}</a>
                    <em>{data.dot}</em>
                    <a href="###" className={style.a}>{data.text6}</a>
                    <em>{data.dot}</em>
                    <a href="###" className={style.a}>{data.text7}</a>
                    <div className={style.icp}>
                        <span className={style.footer_text}>©2012-2019 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /</span>
                        <a href="###" className={style.a}>
                            <img src={require('../../assets/cc.png')} className={style.img} alt=""/>
                            <span className={`${style.footer_text} ${style.active}`}>沪公网安备31010402002252号 /</span>
                        </a>
                        <br/>
                        <a href="###" className={style.a}>
                            <img src={require('../../assets/dd.png')} className={style.img} alt=""/>
                            <span className={style.footer_text}>举报电话：021-34770013 /</span>
                        </a>
                        <a href="###" className={style.a}>
                            <img src={require('../../assets/ee.png')} className={style.img} alt=""/>
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer