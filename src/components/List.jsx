var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
  render: function() {
      //CREATE ITEM FUNCTION
      var createItem = function(text, index) {
          return <ListItem key={index + text} text={text} />;
      };
      //CREATE ITEM FUNCTION RAN AGAINST EVERY LIST ITEM
      return (<ul>{this.props.items.map(createItem)}</ul>);
  }

});

module.exports = List;
