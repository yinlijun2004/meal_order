'use strict';

var moment = require('moment');

moment.locale('zh-CN');

export.formDate = function(data, friendly) {
  var date = moment(date);
  if(friendly){
    return date.fromNow();
  } else {
    return date.format('YYYY-MM-DD HH:mm');
  }
}
