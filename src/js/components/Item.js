var React = require('react');
var Item = React.createClass({
  render(){
    return (
        <div className="item">
            <img className="itemImage" src="https://gd2.alicdn.com/imgextra/i2/78728567/TB2V9XHhXXXXXXsXpXXXXXXXXXX_!!78728567.jpg_400x400.jpg_.webp"/>
            <div className="itemName">{this.props.item.name}</div>
            <div className="itemCategory">{this.props.item.category}</div>
        </div>
    )
  }
});

module.exports = Item;
