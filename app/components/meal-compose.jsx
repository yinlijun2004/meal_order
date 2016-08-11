'use strict';

var React = require("react");

var MealCompose = React.createClass({
  render() {
      var info = this.props.meal || {};
      return (
        <div className="mealCompose" >
          <input type="text" className="mealComposeMeal" value={info.meal || null} placeholder="菜名"></input>
          <br/>
          <input type="text" className="mealComposePrice" value={info.price || null} placeholder="价格"></input>
          <br/>
          <input type="text" className="mealComposeImg" value={info.imgUrl || null} placeholder="图片"></input>
          <img src={info.imgUrl || null}></img>
          <input type="button" value="取消"></input>
          <input type="button" value="提交"></input>
        </div>
      );
  },
});

module.exports = MealCompose;
