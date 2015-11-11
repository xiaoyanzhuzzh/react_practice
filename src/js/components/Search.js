var React = require('react');
var Search = React.createClass({
    getInitialState() {
      return { value: '' };
    },
    handleChange(event) {
      this.setState({value: event.target.value});
    },
    handleSubmit(event){
      event.preventDefault();
      this.props.onSearch(this.state.value);
    },
    render() {
      return (
        <form id="search_item" onSubmit={this.handleSubmit}>
          <div>
            <div>
              <div>
                <input type="text" id="item" value={this.state.value} onChange={this.handleChange} />
                <span className="input-group-btn">
                  搜索
                </span>
              </div>
            </div>
          </div>
        </form>
      );
    }
});
module.exports = Search;

