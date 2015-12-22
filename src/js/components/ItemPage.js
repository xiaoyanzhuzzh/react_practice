var React = require('react');
var Search = require('./Search');
var ItemList = require('./ItemList');
var itemList = [
  {id: 1, name: '毛呢外套', price: 1028.0, unit: '件', category: '女装', number: 400, image: '/image/xiaozhu1.png'},
  {id: 2, name: '雪地靴', price: 299.0, unit: '双', category: '鞋子', number: 500, image: '/image/xiaozhu2.png'},
  {id: 3, name: '儿童玩具', price: 1398.0, unit: '套', category: '玩具', number: 399, image: '/image/xiaozhu3.png'},
  {id: 4, name: '纯棉四件套', price: 169.0, unit: '套', category: '家纺', number: 399, image: '/image/xiaozhu4.png'},
  {id: 5, name: '毛衣', price: 128.0, unit: '件', category: '女裝', number: 399, image: '/image/xiaozhu5.png'}
];

var ItemPage = React.createClass({
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
      <div className="itemPage">
        <Search onSearch={this.searchForItem} />
        <ItemList items={this.state.itemList} />
      </div>
    );
  }
});

module.exports = ItemPage;
