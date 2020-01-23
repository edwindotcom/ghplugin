import * as React from "react";
import TreeMenu from "react-simple-tree-menu";

import "./Tree.css";

class Tree extends React.Component {
  handleClick(event) {
    // if we're at the end of the tree, open the link prop
    if (!event.hasNodes && event.link) {
      window.open(event.link, "_blank");
    }else if(event.openNodes.length > 1){
      // TODO: close the other nodes if more than one is open
      event.openNodes = [event.parent]
    }
  }
  render() {
    return (
      <TreeMenu
        data={this.props.dataProvider}
        onClickItem={this.handleClick}
        debounceTime={125}
      />
    );
  }
}

export default Tree;
