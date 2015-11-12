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
      <div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>分类</td>
              <td>名称</td>
              <td>价格</td>
              <td>单位</td>
              <td>个数</td>
            </tr>
          </thead>
          <tbody>
            {itemList}
          </tbody>
        </table>
      </div>
    )
  }
});

module.exports = ItemList;
