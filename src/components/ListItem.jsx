//IMPORT REACT
var React = require('react');

//CREATING A CLASS (REUSABLE)
var ListItem = React.createClass({
  render: function() {
      return (
        //this refers to ListItem
        //props.text refers to the text property of the class, ListItem
          <li>
              <h4>{this.props.text}</h4>
          </li>
      );
  }

});

//EXPORT THE CLASS
module.exports = ListItem;
