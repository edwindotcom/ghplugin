import React from "react";
import "./App.css";

import Header from "../common/Header.jsx";
import { ComboBox } from "office-ui-fabric-react/lib/index";
import { Pivot, PivotItem, PivotLinkFormat } from "office-ui-fabric-react/lib/Pivot";
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

// import Footer from "../common/Footer.jsx";
import IconBar from "../common/IconBar.jsx";
import Search from "../common/Search.jsx";

const baseUrl = "https://github.com";
// const ghSearchUrl = `${baseUrl}/search?q=`
// const ghCodeUrl = `${baseUrl}/search?type=Code&q=`;
// const ghUrl = "https://github.com/search?q=";
//https://github.com/primer/components/search?q=edwindotcom&type=Issues
// const ghUrl = "https://github.com/search?q=";


const pivotSpacer = mergeStyles({
  marginTop: 10
});
const verticalStyle = mergeStyles({
  display:"flex",
  justifyContent:"space-between"
});

const INITIAL_OPTIONS = [
  {
    key: "All",
    text: "All"
  },
  { key: "github", text: "github" },
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Pivot linkFormat={PivotLinkFormat.links}>
          <PivotItem className={pivotSpacer} headerText="All">
            <Search
              placeholder="Search All GitHub"
              baseUrl={baseUrl}
              type="all"
            />
          </PivotItem>
          <PivotItem className={pivotSpacer} headerText="Repos">
            <ComboBox
              defaultSelectedKey="All"
              label="Repo"
              allowFreeform
              autoComplete="on"
              options={INITIAL_OPTIONS}
              componentRef={this._basicComboBox}
              // onItemClick={() => this.setState({"repo":this.state.value})}
              onMenuOpen={() => console.log("ComboBox menu opened")}
            />
            <Search placeholder="Search Repos" baseUrl={baseUrl} type="Repos" />
          </PivotItem>
          <PivotItem className={pivotSpacer} headerText="Users">
            <Search placeholder="Search Users" baseUrl={baseUrl} type="Users" />
          </PivotItem>
          <PivotItem className={pivotSpacer} headerText="Issues">
            <Search
              placeholder="Search Issues"
              baseUrl={baseUrl}
              type="Issues"
            />
          </PivotItem>
        </Pivot>
        <IconBar />
      </div>
    );
  }
}

export default App;
