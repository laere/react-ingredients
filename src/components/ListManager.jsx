var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
    getInitialState: function() {
      return {items: [], newItemText: ''};
    },
    onChange: function(e) {
        this.setState({newItemText: e.target.value});
    },
    //E for ELEMENT
    handleSubmit: function(e) {
      //STOP CLICK FROM TRIGGERING. using FORM ONSUBMIT.
        e.preventDefault();

        //state of items array is empty
        var currentItems = this.state.items;

        //push text of new item into items array
        currentItems.push(this.state.newItemText);

        //setState is a function of a React Class
        //used whenever you want to change the state(data) of your app
        //take these current items, which we have added the item onto
        //change these items to be the new array(currentItems)
        this.setState({items: currentItems, newItemText:''});
    },
    render: function() {
        return (
          //make things dynamic(reusable)
            <div>
                <h3>{this.props.title}</h3>
                <form onSubmit={this.handleSubmit}>
                  <input onChange={this.onChange} value={this.state.newItemText} />
                  <button>Add</button>
                </form>
                <List items={this.state.items} />
            </div>
        );
    }

});

module.exports = ListManager;
