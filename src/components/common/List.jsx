import * as React from "react";
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { Link } from 'office-ui-fabric-react/lib/Link';

const list = mergeStyles({
  listStyle: 'none',
  margin: '0 auto',
  padding: '0'
});

class List extends React.Component {
  render() {
    const listItems = this.props.links.map((link) =>
        <li>
        <Link
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name}
        </Link>
      </li>
    );
    return (
      <div >
        <ul className={list}>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default List;
