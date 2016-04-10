# 个人简历
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yangjunlong/resume/blob/master/LICENSE)
[![NPM version](https://badge.fury.io/js/yangjunlong.png)](http://badge.fury.io/js/yangjunlong)
> There is only one heroism in the world：to see the world as it is and to love it.

## 自我介绍
> 拥有近6年WEB前端开发经验、优秀的互联网基因，有亿级PV产品线大型项目经验，具有一定的前端架构能力，熟悉敏捷开发流程，熟练使用svn、git、sublime等开发工具。

> 偶将时刻关注给力offer中ing...

> <del>世界那么大，我想去看看</del>

## 个人信息
姓名：杨军龙

性别：男

籍贯：山东

爱好：不求甚解的阅读，心无旁骛的工作，情不自禁的去爱，说走就坐车的旅行...

做过：[读书](http://thing.douban.com/subject/759/)，[放风筝](http://thing.douban.com/subject/38/)，[摄影](http://www.douban.com/thing/185/)，[骑行](http://www.douban.com/thing/102/)，[搭讪](http://www.douban.com/thing/198/)，[做梦](http://thing.douban.com/subject/556/)，[下厨房](http://www.douban.com/thing/2035/)，[看电影](http://www.douban.com/thing/237/)，[修数码产品](http://www.douban.com/thing/2121/)...

职业：`前端开发工程师` · `北京`

## 教育经历
`2006.9` ~ `2010.6` [山东财经大学](http://www.sdufe.edu.cn/) `信息管理与信息系统专业` 本科

## 工作经历
`2015.9` ~ `至今` [58](https://www.58.com/)
> [58金融](http://jinrong.58.com/)，[58月付](http://yuefu.58.com)，[品质公寓](http://gongyu.58.com)等产品的前端架构与优化

`2012.7` ~ `2015.9` [百度](https://www.baidu.com/)

> [百度知道](http://zhidao.baidu.com/)，前端优化

> [百度经验](http://jingyan.baidu.com/)，FIS升级，前端性能优化，mis系统前端重构

`2011.5` ~ `2012.6` [高德](http://autonavi.com/)
> [mapabc](http://code.mapabc.com/class.html?ajax) 控件编写，Web页面的设计及产品代码重构

> 制图项目(地图样式编辑器)的前端开发工作

`2010.7` ~ `2011.4` [普加](http://www.pujia.com/)
> 负责公司Javascript开发,公司门户页面交互效果的实现，PHP程序开发。

> 开发并维护公司地图、公交及其相关产品的开发。

## 个人能力
* <del>`具有连续加班到晚11点20天+的经历&能力`。</del>
* 熟悉使用 javascript，html，css开发，能够精确实现UE图稿到交互页面。
* 熟悉 jQuery，Bootstrap，zepto，tangram等业界基础库。
* 熟悉基于 FIS 架构前端开发，具有通过该解决方案快速构造重交互页面的能力。
* 熟悉 PHP 语言，对于前端常见错误问题具有快速定位解决问题的能力。
* 熟练掌握PHP + MySql，熟悉MVC开发。
* 熟练操作Linux系统，熟悉LAMP配置优化及SVN服务搭建配置。
* 熟悉 nodejs，npm 包开发与发布，熟练使用 git 和 svn 等基础工具。
* 可快速使用AngularJs构建SAP(单页面应用)的MIS系统。
* 具有团队文档平台建设经验，对前端开发代码规范化,平台化,工具化有一定的探索能力。

## 项目经历
**58品质公寓项目**(2015.12 ~ 2016.1)
> 该项目主要定位：高品质服务式青年公寓，面向20-30岁追求生活品质的白领、留学生、有一定的消费能力的人。

主要工作：
* 基于jello + velocity 前后端分离 并将fis-velocity-tool引入后端，解决前端静态资源自动依赖输出的问题。
* 组件化：地图展示、log统计等，只需在业务场景中`require`进来即可使用，组员无需关心具体实现。
* 跟进项目进度，协调在58APP中的测试工作。

[项目地址](http://gongyu.58.com) 请使用手机查看

**百度经验前端性能优化**(2015.6 ~ 2015.7)
> 自经验前端从fis1升级到fis2后，静态资源打包策略因升级带了一些变化，造成代码冗余，各种项目积累N久，经验前端性能优化势在必行。
该项目是年初经验前端技术规划中隶属前端性能优化中的一部分，最早5月份开始前期调研，6月份给经验主要页面加入资源统计脚本，7月上线。

主要工作：
* 前期调研设计
* 接入《FIS静态资源自动合并系统》自动打包优化。
* 优化common-new模块，主要是从fis1升级fis2遗留的冗余js代码。
* 模板压缩优化 开发完成 《[fis-optimizer-tpl-compress](https://www.npmjs.com/package/fis-optimizer-tpl-compress)》模板压缩插件。
* 根据上平台的打包结果，自测调优后上线各个模块。

[线上预览](http://jingyan.baidu.com/article/6525d4b153c977ac7c2e945b.html) 右键查看源码可看到效果

---

**经验个人中心改版项目**(2014.9 ~ 2014.10)
> 个人中心作为用户的根据地，能够在情感和荣誉上予以用户激励，同时也能让新用户初步了解经验，予以部分转化。此次改版主要针对作者自己看自己，而看别人个人中心则会随之优化。该项目主要提升用户体验，统一经验站内样式。

主要工作
* 前端技术方案选型
* 新接口定义&升级文档整理
* 个人中心消息系统文档梳理

[线上预览](http://jingyan.baidu.com/user/nuc) 需要登录

---

**经验财富商城项目**(2014.3 ~ 2014.4)
> 财富商城项目通过财富值兑换礼品的方式来激励用户进行创作，使得经验财富值得以流通起来，为后续更多元化的激励模式奠定基础，并为后续社区化建设提供虚拟货币的基础。

主要工作：
* 负责项目的前端开发和项目推进工作。
* 设计项目详细设计文档，确定项目排期
* 项目上线收益效果跟进

[线上预览](http://jingyan.baidu.com/shop)

---

**经验详细页面改版**(2013.10 ~ 2013.11)
> 该项目主要对经验详细页进行了一次全新的改版，新版页面更加扁平化，兼容宽屏与窄屏自适应等，改版后的页面用户体验更好，页面性能提升10%左右，PV&UV也有一定量的提升。

主要工作：

* 负责项目的前端开发和项目推进工作，确定项目排期。
* 经验整站导航，款窄屏自适应以及右侧栏目的开发。
* 优化代码，抽象前端公用组件

[线上预览](http://jingyan.baidu.com/article/6525d4b153c977ac7c2e945b.html)

---

**经验回享分成体系项目**(2013.2 ~ 2013.5)
> 该项目在功能上完成用户加入、CPM等级、后台管理、收入计算、收入提现等一整套完整体系，为经验后续提升用户活跃度、用户贡献量等系列激励项目打下了坚实基础，该项目上线取得不错的效果：经验提交量增长100%、每日贡献用户数增长200%、用户的活跃度、平台与用户的交流以及经验的质量都有很大提高。

主要工作：

* 负责整个项目的前端页面开发，需求分解，负责前端详细设计文档、迭代计划。
* 基于FIS抽象前端公用组件。
* 精确实现UE图稿到静态页面，及页面交互细节的实现。
* 后续二期三期迭代跟进开发，项目总结分享。

[线上预览](http://jingyan.baidu.com/user/income)

---

## 联系方式
邮箱：583528957@qq.com

博客：[https://sobird.me](https://sobird.me)

## 最后
如果你觉得我的简历还不错的话，通过支付宝打赏我

<img src="https://raw.githubusercontent.com/yangjunlong/resume/master/assets/weixin.jpg" alt="微信捐赠" title="微信捐赠" />

又或者，你跟我很熟？

<img src="https://raw.githubusercontent.com/yangjunlong/resume/master/assets/zhuang13.jpg" alt="简历求扩散" title="简历求扩散~" width="250px" />

那么，请`速扩散`此`简历`~

## 致谢
谨在此向所有在我求职过程中帮助过我的小伙伴们表示感谢！

如果你对此简历有任何问题，欢迎提[issue](https://github.com/yangjunlong/resume/issues)。