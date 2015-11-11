var React = require('react');
var Search = require('./Search');
var ItemList = require('./ItemList');
var itemList = [
  {id: 1, name: '菠萝', price: 12.0, unit: '个', category: '水果', number: 4},
  {id: 2, name: '苹果', price: 12.0, unit: '个', category: '水果', number: 4},
  {id: 3, name: '橘子', price: 12.0, unit: '个', category: '水果', number: 4}
];

var App = React.createClass({
  getInitialState(){
    return {
      itemList: itemList
    }
  },
  searchForItem(item){
    var newItemList = [];
    for(var i = 0; i < itemList.length; i++){
      if(item === itemList[i].name){
        newItemList.push(itemList[i]);
      }
    }
    this.setState({itemList: newItemList});
  },
  render(){
    return (
      <div>
        <h1>CartItems of your cart</h1>
        <Search onSearch={this.searchForItem} />
        <ItemList items={this.state.itemList} onClick={this.searchForItem} />
      </div>
    );
  }
});

module.exports = App;
