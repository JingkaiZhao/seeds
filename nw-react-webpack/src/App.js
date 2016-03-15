var React = require('react');

var gui = window.nw && window.nw.gui;

var App = React.createClass({

  getInitialState: function() {
    var menu = new gui.Menu();

    // Add some items with label
    menu.append(new gui.MenuItem({
      label: 'Item A',
      click: function(){
        alert('You have clicked at "Item A"');
      }
    }));
    menu.append(new gui.MenuItem({ label: 'Item B' }));
    menu.append(new gui.MenuItem({ type: 'separator' }));
    menu.append(new gui.MenuItem({ label: 'Item C' }));

    this.contextMenu = menu;
    return null;
  },

  handleContextMenu: function(event) {
    // Prevent showing default context menu
    event.preventDefault();
    // Popup the native context menu at place you click
    this.contextMenu.popup(event.pageX, event.pageY);

    return false;
  },

  render: function() {
    return (
      <div onContextMenu={this.handleContextMenu}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;