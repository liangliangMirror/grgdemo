const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../myConfig/reverseConfig')
router.prefix('/general')

router.get('/getUserTNMenu', function (ctx, next) {
  ctx.body =  new SuccessModel({
    data: {"result":"1","msg":"数据操作成功","datas":[{"id":"M-UU142493393340566190","name":"系统管理","parentId":"0","resourceId":"","sortOrder":10,"state":"1","icon":"","resource":null,"childs":[]},{"id":"M_U155308125680157473","name":"首页","parentId":"1","resourceId":"U155308127392459296","sortOrder":15,"state":"1","icon":"","resource":{"id":"U155308127392459296","name":"首页","uri":"/","createTime":1553081274000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]},{"id":"M_U155307361536938460","name":"董事会人员管理","parentId":"1","resourceId":"","sortOrder":16,"state":"1","icon":"","resource":null,"childs":[{"id":"M_U155307378078430458","name":"章程规定人数填写","parentId":"M_U155307361536938460","resourceId":"U155308161085715315","sortOrder":2,"state":"1","icon":"","resource":{"id":"U155308161085715315","name":"董事会成员计划填写","uri":"directoratePeopleWrite","createTime":1553081611000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]},{"id":"M_U155307380196326495","name":"在任董事会成员管理","parentId":"M_U155307361536938460","resourceId":"U155308162068508728","sortOrder":3,"state":"1","icon":"","resource":{"id":"U155308162068508728","name":"董事会成员管理","uri":"directoratePeopleManage","createTime":1553081621000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]}]},{"id":"M_U155307382503077078","name":"董事会办公室成员管理","parentId":"1","resourceId":"","sortOrder":17,"state":"1","icon":"","resource":null,"childs":[{"id":"M_U155307390852198502","name":"董事会办公室成员管理","parentId":"M_U155307382503077078","resourceId":"U155308165898499480","sortOrder":1,"state":"1","icon":"","resource":{"id":"U155308165898499480","name":"董事会办公室人员管理","uri":"directorateOfficeManage","createTime":1553081659000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]},{"id":"M_U155307394168723643","name":"董秘列席会议情况填写","parentId":"M_U155307382503077078","resourceId":"U155308166941963219","sortOrder":2,"state":"1","icon":"","resource":{"id":"U155308166941963219","name":"董秘列席情况填写管理","uri":"directorateOfficeWrite","createTime":1553081669000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]}]},{"id":"M_U155307395686567440","name":"董事会会议管理","parentId":"1","resourceId":"","sortOrder":18,"state":"1","icon":"","resource":null,"childs":[{"id":"M_U155307398576010431","name":"董事会会议录入","parentId":"M_U155307395686567440","resourceId":"U155308169555443667","sortOrder":1,"state":"1","icon":"","resource":{"id":"U155308169555443667","name":"董事会会议录入","uri":"directorateMetting","createTime":1553081696000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]},{"id":"M_U155307400798702301","name":"专门委员会会议录入","parentId":"M_U155307395686567440","resourceId":"U155308170499319712","sortOrder":2,"state":"1","icon":"","resource":{"id":"U155308170499319712","name":"专门委员会会议录入","uri":"directorateSpeciallyMetting","createTime":1553081705000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]},{"id":"M_U155307402711477417","name":"座谈/培训录入","parentId":"M_U155307395686567440","resourceId":"U155308171826494471","sortOrder":3,"state":"1","icon":"","resource":{"id":"U155308171826494471","name":"座谈/培训录入","uri":"directorateTrainMetting","createTime":1553081718000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]}]},{"id":"M_U155307407018420535","name":"董事会年度报告管理","parentId":"1","resourceId":"U155308163767813075","sortOrder":19,"state":"1","icon":"","resource":{"id":"U155308163767813075","name":"董事年度报告管理","uri":"directorateYearReportManage","createTime":1553081638000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]},{"id":"M_U155307081793234664","name":"外部董事管理","parentId":"1","resourceId":"","sortOrder":20,"state":"1","icon":"","resource":null,"childs":[{"id":"M_U155307083502453492","name":"年度述职报告","parentId":"M_U155307081793234664","resourceId":"U155307090649434993","sortOrder":1,"state":"1","icon":"","resource":{"id":"U155307090649434993","name":"年度述职报告","uri":"yearReport","createTime":1553070906000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]},{"id":"M_U155307134213992447","name":"半年度报告","parentId":"M_U155307081793234664","resourceId":"U155308202912012409","sortOrder":2,"state":"1","icon":"","resource":{"id":"U155308202912012409","name":"半年度报告录入","uri":"halfReport","createTime":1553082029000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]},{"id":"M_U155307345841865419","name":"重大事项报告","parentId":"M_U155307081793234664","resourceId":"U155308204295692302","sortOrder":3,"state":"1","icon":"","resource":{"id":"U155308204295692302","name":"重大事项报告录入","uri":"majorReport","createTime":1553082043000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]},{"id":"M_U155307357644201346","name":"专项（调研）报告","parentId":"M_U155307081793234664","resourceId":"U155308205804410036","sortOrder":4,"state":"1","icon":"","resource":{"id":"U155308205804410036","name":"专项（调研）报告录入","uri":"specialReport","createTime":1553082058000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]}]},{"id":"M_U157939600015586327","name":"外部董事年度考核管理","parentId":"1","resourceId":"","sortOrder":20,"state":"1","icon":"","resource":null,"childs":[{"id":"M_U157939604213398327","name":"自评表","parentId":"M_U157939600015586327","resourceId":"U157939555807464367","sortOrder":1,"state":"1","icon":"","resource":{"id":"U157939555807464367","name":"人事考核-自评表","uri":"/assessSelfList","createTime":1579395558000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]}]},{"id":"M_U155307589968190607","name":"担保项目管理","parentId":"1","resourceId":"U155308156488126731","sortOrder":21,"state":"1","icon":"","resource":{"id":"U155308156488126731","name":"担保项目管理","uri":"guaranteeListAdd","createTime":1553081565000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]},{"id":"M_U155307631056275001","name":"统计分析","parentId":"1","resourceId":"","sortOrder":28,"state":"1","icon":"","resource":null,"childs":[{"id":"M_U155307632149024468","name":"董事会人员分析","parentId":"M_U155307631056275001","resourceId":"U155308193599205022","sortOrder":1,"state":"1","icon":"","resource":{"id":"U155308193599205022","name":"董事会人员分析","uri":"directoratePeople","createTime":1553081936000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]},{"id":"M_U155307635267599032","name":"董事会会议分析","parentId":"M_U155307631056275001","resourceId":"U155308194758898574","sortOrder":2,"state":"1","icon":"","resource":{"id":"U155308194758898574","name":"董事会会议分析","uri":"directorateMeeting","createTime":1553081948000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]},{"id":"M_U155307636715059719","name":"专门委员会会议分析","parentId":"M_U155307631056275001","resourceId":"U155308196313302458","sortOrder":3,"state":"1","icon":"","resource":{"id":"U155308196313302458","name":"专门委员会会议分析","uri":"specialMeeting","createTime":1553081963000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]},{"id":"M_U155307639247458058","name":"外董座谈/培训分析","parentId":"M_U155307631056275001","resourceId":"U155308196977349736","sortOrder":4,"state":"1","icon":"","resource":{"id":"U155308196977349736","name":"参加座谈/培训统计","uri":"trainning","createTime":1553081970000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]},{"id":"M_U155307641384757489","name":"外董参会情况分析","parentId":"M_U155307631056275001","resourceId":"U155347841615152380","sortOrder":5,"state":"1","icon":"","resource":{"id":"U155347841615152380","name":"外董参会会议分析","uri":"outsideDirector","createTime":1553478416000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]},{"id":"M_U155307643212509824","name":"董秘列席会议情况分析","parentId":"M_U155307631056275001","resourceId":"U155308198028745313","sortOrder":6,"state":"1","icon":"","resource":{"id":"U155308198028745313","name":"董秘列席会议情况","uri":"secretaryMeeting","createTime":1553081980000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]},{"id":"M_U155307644809086086","name":"外董报告分析","parentId":"M_U155307631056275001","resourceId":"U155308198963837584","sortOrder":7,"state":"1","icon":"","resource":{"id":"U155308198963837584","name":"外部董事报告分析","uri":"outsideDirectorReport","createTime":1553081990000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]},{"id":"M_U155307645506834671","name":"担保项目分析","parentId":"M_U155307631056275001","resourceId":"U155308200116415696","sortOrder":8,"state":"1","icon":"","resource":{"id":"U155308200116415696","name":"担保项目分析","uri":"guarantee","createTime":1553082001000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]}]},{"id":"M_U155307646501525202","name":"查询","parentId":"1","resourceId":"","sortOrder":29,"state":"1","icon":"","resource":null,"childs":[{"id":"M_U155307648541892675","name":"历届董事会成员查询","parentId":"M_U155307646501525202","resourceId":"U155308218496356132","sortOrder":1,"state":"1","icon":"","resource":{"id":"U155308218496356132","name":"董事会成员查询","uri":"boardMembers","createTime":1553082185000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]},{"id":"M_U155307652135923591","name":"外董个人履职情况全视图","parentId":"M_U155307646501525202","resourceId":"U155308295693356802","sortOrder":2,"state":"1","icon":"","resource":{"id":"U155308295693356802","name":"外董个人履职情况全视图","uri":"/bigHome/organigraphs","createTime":1553082957000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]},{"id":"M_U155307654300655114","name":"董事会运作全视图","parentId":"M_U155307646501525202","resourceId":"U155308292219435452","sortOrder":3,"state":"1","icon":"","resource":{"id":"U155308292219435452","name":"董事会运作全视图","uri":"/bigHome/performance","createTime":1553082922000,"state":"1","opAuths":null,"auths":null,"type":"other_resource","prefix":null},"childs":[]}]}],"data":null,"totalPage":0,"totalNum":0,"perPageSize":10,"size":34,"map":{}}
})
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
