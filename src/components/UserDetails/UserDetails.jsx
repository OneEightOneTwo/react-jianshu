import React from 'react'
import css from './UserDetails.css'

class UserDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <main className={css.main}>
                <div>
                    <h1 className={css.h1}>如何参悟Java的三大框架</h1>
                </div>
                <div className={`${css.clearfix} ${css.one}`}>
                    <div className={`${css.user} ${css.fl}`}>
                        <img src={require('../../assets/timg4.jpg')} className={css.touxiang} alt=""/>
                    </div>
                    <div className={`${css.fl} ${css.xinxi}`}>
                        <div className={css.jd}>
                            <span className={css.name}>墨雨轩夏</span>
                            <span className={css.attention}>
                                <i> + </i>关注
                            </span>
                        </div>
                        <div>
                            <p className={css.attention_bottom}>
                                <span>2019.02.17 20:29</span>
                                <span className={css.jg}>字数</span>
                                <span className={css.jg}>1114</span>
                                <span className={css.jg}>阅读</span>
                                <span className={css.jg}>1183</span>
                                <span className={css.jg}>评论</span>
                                <span className={css.jg}>5</span>
                                <span className={css.jg}>喜欢</span>
                                <span className={css.jg}>23</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={css.two}>
                    <p className={css.paragraph}>大数据时代，中国IT环境也将面临重新洗牌，不仅仅是企业，更是程序员们转型可遇而不可求的机遇。</p>
                    <div className={css.picture}>
                        <img src={require('../../assets/timg6.png')} className={css.photograph} alt=""/>
                    </div>
                    <p className={css.paragraph}>Java是世界第一编程语言，这已经达成共识，是毋庸置疑的真理。框架是程序员们必学的知识点，而且是十分重要的应用，Spring、Struts、Hibernate也是经典中的经典，最常用的框架类型。</p>
                    <p className={css.paragraph}>作为Java初学者应该如何去学习领悟Java三大框架呢？近期也是搜集很多建议，为大家总结如下：</p>
                    <p className={css.paragraph}>有同学建议：对于Spring来说，最应该学习的就是Spring的IOC原理，在这使用过程中是必须要理解的、必会的。用配置文件或者是Annonation的方式来代替New创建实例，可以说这是一个历史性的进步，并且前进一大步，影响深远。也是间接的促成接口实现分离的优雅风格。另外，该同学还认为，建议把Hibernate换成Mybatis。</p>
                    <p className={css.paragraph}>还有的同学建议说：从配置文件开始，理解三个字母各自是如何工作的，以及是如何协同工作的。我从零开始学习ssi的时候就是这么干的，花了一个月左右，使用起来就比较熟练了。然后深入框架的一些高级用法。再接着琢磨它们的原理、思想和设计、实现。最后到能自己重新发明轮子。</p>
                    <p className={css.paragraph}>更有大神级别的同学给出详细的建议，连具体步骤都给出了明确的说明。具体如下：</p>
                    <p className={css.paragraph}>1. Java语法基础，可以看think in Java</p>
                    <p className={css.paragraph}>2. servlet，jsp，jdbc，结合html，css，js实现自己想要的小网站，功能慢慢积少成多。</p>
                    <p className={css.paragraph}>3. spring,springmvc,springdata,hibernate等框架学习，一上来就用这些框架忽略基础，这样会出现只会用XXX框架，换个yyy框架又得重新学习的感觉。</p>
                    <p className={css.paragraph}>4. 设计模式，aop、oop等的学习，当然可以和之前的步骤反复来研究提高。</p>
                    <p className={css.paragraph}>对于具体的操作，很多有经验的小伙伴也有妙招：其实不外乎实操这一真理，就是亲自去写一些框架，实践出真知，只有实践操作过了，才能真正理解那些曾经学过的知识都是怎么回事。比如这位朋友建议写一些通过JDBC直接到数据库读写数据的代码，写一个简单的web app，可以登记用户，要对数据有效性能控制，要能检测出错误。然后再想办法优化成spring、hibernate和struts。优化到代码越少越好。实操之后最重要就是思考，每做完一个项目就做一次总结，动脑想想为什么，接下来怎么做，那么框架那点事就不叫事儿了。</p>
                    <p className={css.paragraph}>上面这些关于学习三大框架的一些技巧和方法，尤其对于初学者尤为重要。学得再多不如一次实操，边学边练是永远不变的真理，也只有这样才能真正学到东西，才能真正的把知识转化为技能从而转化为自己的财富。</p>
                    <p className={css.paragraph}>希望所有Java初学者都能顺利入门，真正掌握一门技能。</p>
                    <p className={css.paragraph}>好程序员特训营自2014年开班至今，一直立志培养高薪，高能，高职的程序员人才，截止目前，好程序员学员就业均薪1万3以上，学员薪资最高达到2万9千元。现在设HTML5、JavaEE、大数据、Android等高端精品课程，40人小班教学保证高品质，坚持100%全程面授。</p>
                    <p className={`${css.paragraph} ${css.active}`}>为了让学习变得轻松、高效，今天给大家免费分享一套Java教学资源。帮助大家在成为Java架构师的道路上披荆斩棘。需要资源的欢迎加入学习交流群：9285，05736</p>
                    <div className={css.three}>
                        <p className={css.bottom}>小礼物走一走，来简书关注我</p>
                        <p className={css.zan}>
                            <span className={css.support}>赞赏支持</span>
                        </p>
                    </div>
                    <div className={`${css.four} ${css.clearfix}`}>
                        <span className={css.diary}>
                            <i className={`${"iconfont"} ${css.book}`}>&#xe662;</i>日记本
                        </span>
                        <span className={css.copyright}>© 著作权归作者所有</span>
                        <span className={css.inform}>举报文章</span>
                    </div>
                    <div className={css.writer}>
                        <div className={css.writer_box}>
                            <div className={`${css.writer_top} ${css.clearfix}`}>
                                <div className={css.fl}>
                                    <img src={require("../../assets/timg6.png")} className={css.touxiang} alt=""/>
                                </div>
                                <div className={`${css.fl} ${css.writer_r}`}>
                                    <p className={`${css.name} ${css.writer_name}`}>墨雨轩夏</p>
                                    <p className={css.attention_bottom}>写了
                                        <span> 286898 </span>字，被
                                        <span> 2179 </span>人关注，获得了
                                        <span> 1978 </span>个喜欢
                                    </p>
                                </div>
                                <p className={`${css.fr} ${css.gz}`}>
                                    <span className={css.zt}>
                                        <i className={`${css.zt} ${css.plus}`}> + </i>关注
                                    </span>
                                </p>
                            </div>
                            <p className={css.last}>长征路上的Java程序员，每天分享Java知识点。每天让梦想更近一些......感兴趣的小伙伴欢迎加入编程学习...</p>
                        </div>
                    </div>
                    <div className={`${css.like} ${css.clearfix}`}>
                        <p className={`${css.praise_like} ${css.fl}`}>
                            <span className={css.xh}>
                                <i className={`${"iconfont"} ${css.jl}`}>&#xe61c;</i>
                                <span className={css.jl}>喜欢</span>
                                <i className={css.jl}> | </i>
                                <span>23</span>
                            </span>
                        </p>
                        <p className={css.more_gd}>更多分享</p>
                        <p className={css.wx}>
                            <i className={`${"iconfont"} ${css.zp_tb}`}>&#xe674;</i>
                        </p>
                        <p className={css.wx}>
                            <i className={`${"iconfont"} ${css.xl_tb}`}>&#xe62f;</i>
                        </p>
                        <p className={css.wx}>
                            <i className={`${"iconfont"} ${css.wx_tb}`}>&#xe7e5;</i>
                        </p>
                    </div>
                </div>
            </main>
        )
    }
}
export default UserDetails