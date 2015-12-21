var React = require('react');
var Item = require('./Item');
var ItemList = React.createClass({
  render(){
    var itemList = [];
    for(var i = 0; i < this.props.items.length; i++) {
      var item = <Item key={this.props.items[i].id} item={this.props.items[i]} />;
      itemList.push(item);
    }

    if(!itemList.length){
      return null;
    }
    return (
      <div id="itemTable">
        {itemList}
      </div>
    )
  }
});

module.exports = ItemList;
