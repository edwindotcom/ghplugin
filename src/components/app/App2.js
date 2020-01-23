import React from "react";
import "./App.css";

import Header from "../common/Header.jsx";
import { Pivot, PivotItem, PivotLinkFormat } from "office-ui-fabric-react/lib/Pivot";
import { Separator } from 'office-ui-fabric-react/lib/Separator';
import { Stack } from 'office-ui-fabric-react/lib/Stack';

import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

// import Footer from "../common/Footer.jsx";
import IconBar from "../common/IconBar.jsx";
import List from "../common/List";
import Search from "../common/Search.jsx";
import Tree from '../common/Tree.jsx';

const mswUrl =
  "https://microsoft.sharepoint.com/teams/MSWHub/_layouts/15/search.aspx?p=2&q=";

const whoUrl = "http://who/Find.aspx?q=";

const pivotSpacer = mergeStyles({
  marginTop: 10
});
const verticalStyle = mergeStyles({
  display: "flex"
  // alignItems: "flexStart",
  // flexWrap: "nowrap",
  // height: "100%"
  // height: '200px'
  // width: '140px'
});
const treeData = {
  "Build": {
    // key
    label: "Build",
    index: 0,
    nodes: {
      "CloudBuild": {
        label: "CloudBuild",
        link: "https://www.1eswiki.com/wiki/CloudBuild"
      },
      "MSBuild": {
        label: "MSBuild",
        link: "https://www.1eswiki.com/wiki/MSBuild"
      },
      "Build Accelerator (Domino)": {
        label: "Build Accelerator (Domino)",
        link: "https://mseng.visualstudio.com/domino/_wiki/wikis/Domino.wiki?pagePath=%2FBuildXL&wikiVersion=GBwikiMaster&pageId=6168"
      },
      "Azure Pipelines": {
        label: "Azure Pipelines",
        link: "https://docs.microsoft.com/en-us/azure/devops/pipelines/index?view=azure-devops"
      }
    }
  },
  "Code": {
    label: "Code",
    nodes: {
      "Visual Studio": {
        label: "Visual Studio",
        link: "https://docs.microsoft.com/en-us/visualstudio/?view=vs-2017"
      },
      "Visual Studio Code": {
        label: "Visual Studio Code",
        link: "https://code.visualstudio.com/docs"
      },
      "Azure DevOps Code Search": {
        label: "Azure DevOps Code Search",
        link: "https://docs.microsoft.com/en-us/azure/devops/project/search/code-search?view=vsts&tabs=new-nav"
      },
      "Azure Repos": {
        label: "Azure Repos",
        link: "https://docs.microsoft.com/en-us/azure/devops/repos/index?view=vsts"
      },
      "github.com/microsoft": {
        label: "github.com/microsoft",
        link: "https://www.github.com/microsoft"
      },
      "Code Flow": {
        label: "Code Flow",
        link: "https://www.1eswiki.com/wiki/CodeFlow"
      }
    }
  }
};

const links = [
  { url: "https://microsoft.sharepoint.com/sites/msw/", name:"MSW" },
  { url: "https://microsoft.sharepoint.com/sites/hrw/", name:"HR Web" },
  { url: "https://microsoft.sharepoint.com/sites/refwebhub", name:"REF Web" },
  { url: "https://benefits.microsoft.ehr.com/US/EN/Dashboard/Pages/default.aspx", name:"Benefits" },
  { url: "https://msexpense2/EmployeeServices/Enterprise%20Portal/default.aspx?&WDPK=initial&WMI=EPPersonalInformation&redirected=1&WCMP=1010&WMI=EPPersonalInformation", name:"MSExpense2" },
  { url: "https://microsoft.sharepoint.com/teams/MyTravel", name:"MS Travel" }
];
const links2 = [
  { url: "https://hrprofile.microsoft.com/Paystub", name:"Paystub" },
  { url: "https://tar/Common/Home.aspx", name:"TAR" },
  { url: "https://microsoft.sharepoint.com/sites/refwebhub", name:"REF Web" },
  { url: "https://benefits.microsoft.ehr.com/US/EN/Dashboard/Pages/default.aspx", name:"Benefits" },
  { url: "https://merge.microsoft.com", name:"Merge" }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Pivot linkFormat={PivotLinkFormat.links}>
          <PivotItem className={pivotSpacer} headerText="Quick Launch">
            <Search placeholder="Search Who" baseUrl={whoUrl} />
            <IconBar />
            <Stack.Item className={verticalStyle}>
              <Separator vertical alignContent="start"> <List links={links} /></Separator>
              <Separator vertical alignContent="end"> <List links={links2} /></Separator>
            </Stack.Item>
          </PivotItem>
          <PivotItem className={pivotSpacer} headerText="1ES">
            <Tree dataProvider={treeData}/>
          </PivotItem>
          <PivotItem className={pivotSpacer} headerText="Intranet">
            <Search placeholder="Search Intranet" baseUrl={mswUrl} />
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}

export default App;
