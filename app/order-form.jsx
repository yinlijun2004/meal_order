var React = require('react');

var OrderForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var meal = this.refs.meal.value.trim();
    var user = this.refs.user.value.trim();
    if(!meal || !user){
      return;
    } 
    this.props.onOrderSubmit({meal: meal, user: user});
    this.refs.meal.value = "";
    this.refs.user.value = "";
    return;
  },
  render: function() {
    return (<form className="orderForm" onSubmit={this.handleSubmit}>
      <input type='text' placeholder='想吃点什么' ref="meal"></input>
      <input type='text' placeholder='你的名字' ref="user"></input>
      <input className='orderFormConfirm' type='submit' value='确定'></input>
      </form>);
  }
});

module.exports = OrderForm;
