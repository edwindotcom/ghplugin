import React from "react";

import { Label } from 'office-ui-fabric-react/lib/Label';
import { Separator } from 'office-ui-fabric-react/lib/Separator';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

import logo from "../../assets/icon48.png";

const header = mergeStyles({
  display: 'flex',
  // justifyContent: 'space-between',
  alignItems: 'center'
});

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className={header}>
          <img src={logo} alt="Logo" height="24" width="24" /><Label>GH Search</Label>
        </div>
        <Separator/>
      </div>
    );
  }
}

export default Header;
