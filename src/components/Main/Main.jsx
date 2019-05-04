import React from 'react'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import Style from './Main.css'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommend: [
                {
                    id: '1',
                    title: '理财帮我改变命运',
                    imgurl: require('../../assets/a.jpg')
                },
                {
                    id: '2',
                    title: '看排行',
                    imgurl: require('../../assets/b.png')
                }
            ],
            journalism: [
                {
                    caption: '用koa开发一套内容管理系统（CMS），支持javascript和typescript双语言',
                    details: '初衷 lin-cms是我们林间有风团队开源的一款CMS，它采用目前主流的前后端分离的架构，前端使用vue作为基础框架，后端选择了我们团队大量实践...',
                    member: 3.7,
                    username: 'pedro_37dc',
                    comment: 4,
                    loving_heart: 34,
                    imgurl: require('../../assets/timg6.png')
                },
                {
                    caption: '此菜吃一次，就等于给肠胃做一次大扫除，营养好吃，做法特简单',
                    details: '今天就来跟大家分享这道《淮山炒云耳》，说道淮山我们就要明白一点，淮山并不是山药，这两种食材是有区别的，一般我们生活中常见的就是山药，削皮之后...',
                    member: 11.9,
                    username: '小管家美食',
                    comment: 2,
                    loving_heart: 27,
                    imgurl: require('../../assets/timg.jpg')
                },
                {
                    caption: '路边菜市的春天',
                    details: '春天悄悄来临，这从路边菜市也可看出。路边有几个摊位上开始卖起了野菜。摊主一般都是老大爷老大妈。他们的野菜是自己亲手从野地里挖来的，通常颜色并不那...',
                    member: 5.0,
                    username: '空空_5343',
                    comment: 8,
                    loving_heart: 33,
                    imgurl: require('../../assets/timg2.jpg')
                },
                {
                    caption: '自学设计，为女儿爆改10年老房，这就是苏明玉最向往的原生家庭吧',
                    details: '最近，糖主总是能收到糖粉关于旧宅改造的提问。 ”糖，我家已经住了老十年了，还有改造的必要吗？“ ”糖主大人，不满意现在的装修，又没有勇气重装，该...',
                    member: 3.8,
                    username: '一兜糖家居',
                    comment: 4,
                    loving_heart: 29,
                    imgurl: require('../../assets/timg3.jpg')
                },
                {
                    caption: '早起这件事，骗了中国人多少年？',
                    details: '这些年，鼓吹早起的文章很多，随手一翻： 《长期坚持早起，到底有多赚？》、 《为什么一流成功人士的闹钟都定在早晨5:57？》 《为什么要早起，这是...',
                    member: 33.2,
                    username: '_飞鱼',
                    comment: 36,
                    loving_heart: 219,
                    imgurl: require('../../assets/timg4.jpg')
                },
                {
                    caption: '潘长江因不认识蔡徐坤，被黑粉喷，有点莫名其妙的节奏！',
                    details: '相信很多网友们都看过综艺节目《王牌对王牌》，并且这期综艺节目从播出以来，就受到了很多观众们的追捧，邀请的嘉宾很全面，游戏环节很精彩，笑点很多。总...',
                    member: 4.1,
                    username: '妖姬T',
                    comment: 41,
                    loving_heart: 42,
                    imgurl: require('../../assets/timg5.jpg')
                }
            ],
            list: [
                {
                    imgurl: require('../../assets/timg3.jpg'),
                    idname: '茶点故事',
                    express: '写了186.6K字 · 7.3K喜欢',
                },
                {
                    imgurl: require('../../assets/timg.jpg'),
                    idname: '梅拾瑛',
                    express: '写了255.4K字 · 24.2K喜欢',
                },
                {
                    imgurl: require('../../assets/timg4.jpg'),
                    idname: '冰千里',
                    express: '写了482K字 · 8.5K喜欢',
                },
                {
                    imgurl: require('../../assets/timg2.jpg'),
                    idname: '只有一半影子的人',
                    express: '写了255.9K字 · 1.2K喜欢',
                },
                {
                    imgurl: require('../../assets/timg5.jpg'),
                    idname: '北美只北',
                    express: '写了401.5K字 · 28.8K喜欢',
                }
            ]
        }
    }
    render() {
        return (
            <main className={Style.clearfix}>
                <div className={Style.main_center}>
                    <div className={Style.rightB}>
                        <Carousel autoplay className={Style.ant_carousel}>
                            {
                                this.state.recommend.map(item => {
                                    return <div key={item.id}>
                                        <img src={item.imgurl} title={item.title} className={Style.imgS} alt="" />
                                    </div>
                                })
                            }
                        </Carousel>
                        <div className={Style.headline}>
                            {
                                this.state.journalism.map((item, index) => {
                                    return <div className={Style.message} key={index}>
                                                <div className={Style.message_text}>
                                                    <h3>{item.caption}</h3>
                                                    <p className={Style.text_main}>{item.details}</p>
                                                    <div className={Style.beta}>
                                                        <span className={Style.zs}>
                                                            <i className={`${"iconfont"} ${Style.zs}`}>&#xe676;</i>
                                                            {item.member}
                                                        </span>
                                                        <span className={Style.commonality}>{item.username}</span>
                                                        <span className={Style.commonality}>
                                                            <i className={`${"iconfont"} ${Style.jianju}`}>&#xe6d7;</i>
                                                            {item.comment}
                                                        </span>
                                                        <span className={Style.ax}>
                                                            <i className={`${"iconfont"} ${Style.jianju}`}>&#xe64e;</i>
                                                            {item.loving_heart}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={Style.message_img}>
                                                    <div className={Style.info}>
                                                        <img src={item.imgurl} className={Style.image} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                })
                            }
                        </div>
                        <div className={Style.read_more}>
                            <span className={Style.more_read}>阅读更多</span>
                        </div>
                    </div>
                    <div className={Style.leftB}>
                        <div className={Style.button}>
                            <div className={`${Style.one} ${Style.one_style}`}>
                                <div className={Style.one_box}>
                                    <span className={`${Style.button_text} ${Style.text_one}`}>简书会员</span>
                                    <i className={`${Style.ico} ${Style.text_one}`}> > </i>
                                    <i className={`${"iconfont"} ${Style.huangguan} ${Style.icon_one}`}>&#xe63c;</i>
                                </div>
                            </div>
                            <div className={`${Style.one} ${Style.two_style}`}>
                                <div className={Style.one_box}>
                                    <span className={`${Style.button_text} ${Style.text_two}`}>优选连载</span>
                                    <i className={`${Style.ico} ${Style.text_two}`}> > </i>
                                    <i className={`${"iconfont"} ${Style.huangguan} ${Style.icon_two}`}>&#xe676;</i>
                                </div>
                            </div>
                            <div className={`${Style.one} ${Style.three_style}`}>
                                <div className={Style.one_box}>
                                    <span className={`${Style.button_text} ${Style.text_three}`}>简书版权</span>
                                    <i className={`${Style.ico} ${Style.text_three}`}> > </i>
                                    <i className={`${"iconfont"} ${Style.huangguan} ${Style.icon_three}`}>&#xe660;</i>
                                </div>
                            </div>
                            <div className={`${Style.one} ${Style.four_style}`}>
                                <div className={Style.one_box}>
                                    <span className={`${Style.button_text} ${Style.text_four}`}>简书大学堂</span>
                                    <i className={`${Style.ico} ${Style.text_four}`}> > </i>
                                    <i className={`${"iconfont"} ${Style.huangguan} ${Style.icon_four}`}>&#xf0099;</i>
                                </div>
                            </div>
                        </div>
                        <div className={Style.generalize}>
                            <div className={Style.generalize_box}>
                                <div className={`${Style.small_box} ${Style.clearfix}`}>
                                    <img src={require('../../assets/erweima.png')} className={Style.erweima} alt=""/>
                                    <div className={Style.erweima_text}>
                                        <p className={Style.text_top}>下载简书手机App
                                            <i> > </i>
                                        </p>
                                        <p className={Style.text_bottom}>随时随地发现和创作内容</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Style.list}>
                            <div className={`${Style.head} ${Style.clearfix}`}>
                                <span className={Style.head_l}>推荐作者</span>
                                <span className={Style.head_r}>换一批</span>
                            </div>
                            <div className={Style.recommend_list}>
                                {
                                    this.state.list.map((item,index)=>{
                                        return  <div key={index} className={Style.author}>
                                                    <div className={`${Style.head_portrait} ${Style.fl}`}>
                                                        <img src={item.imgurl} className={Style.photo} alt=""/>
                                                    </div>
                                                    <p className={Style.name}>
                                                        <span className={Style.fl}>{item.idname}</span>
                                                        <span className={`${Style.fr} ${Style.attention}`}>
                                                            <i> + </i>
                                                            关注
                                                        </span>
                                                    </p>
                                                    <p className={`${Style.fl} ${Style.describe}`}>{item.express}</p>
                                                </div>
                                    })
                                }
                            </div>
                            <div className={Style.more}>
                                <p className={Style.more_text}>查看全部
                                    <i> > </i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
export default Main