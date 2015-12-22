var React = require('react');
var Item = React.createClass({
  render(){
    return (
        <div className="item">
            <img className="itemImage" src={this.props.item.image}/>
            <div className="itemName">{this.props.item.name}</div>
            <div className="itemCategory">{this.props.item.category}</div>
        </div>
    )
  }
});

module.exports = Item;
