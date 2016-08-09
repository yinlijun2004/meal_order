'use restrict';
var tools = require('../common/tools');

module.exports = function(schema) {
  schema.methods.create_at_ago = function() {
    return tools.formDate(this.createAt, true);
  };
  
  schema.methods.update_at_ago = function() {
    return tools.formDate(this.updateAt, true);
  }
}
