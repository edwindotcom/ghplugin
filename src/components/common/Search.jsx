import * as React from "react";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

class Search extends React.Component {
  constructor(props) {
    super(props);
    initializeIcons();
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event) {
      this.setState({ value: event.target.value });
    } else {
      this.setState({ value: "" });
    }
  }

  handleSubmit(event) {
    let url = `${this.props.baseUrl}/search?`
    url = url + `&type=${this.props.type}`;
    url = url + `&q=${this.state.value}`
    window.open( url , "_blank" );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <SearchBox
          id="searchBox"
          placeholder={this.props.placeholder}
          value={this.state.value}
          type={this.state.type}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Search;
