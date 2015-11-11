var React = require('react');
var Item = React.createClass({
  render(){
    return (
      <tr>
        <td>{this.props.item.id}</td>
        <td>{this.props.item.category}</td>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.price}</td>
        <td>{this.props.item.unit}</td>
        <td>{this.props.item.number}</td>
      </tr>
    )
  }
});

module.exports = Item;
