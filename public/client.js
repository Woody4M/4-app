
"use strict";

class ListTable extends React.Component {
  render() {
    const rows = [];
    let mykey = 1;
    this.props.dataset.forEach(
      (dataItem) => {
        console.log(dataItem);
        dataItem.key = mykey.toString();
        rows.push(
          <ListItem key={mykey.toString()} item={dataItem} />
        );
        mykey++;
      }
    );
    return (
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>pugs</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
    );
    
  }
}
class ListItem extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <tr onClick={() => this.goItem()}>
        <td>{item.year}</td>
        <td>{item.pugs}</td>
      </tr>
    );
  }

  goItem() {
    window.location.href='/item/' + this.props.item.key;
  }
}

class FullItem extends React.Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>pugs</th>
              <th>Advice</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {this.props.dataset.year}
              </td>
              <td>
                {this.props.dataset.pugs}
              </td>
              <td>
                {this.props.dataset.advice}
              </td>
              <td>
                <img src={this.props.dataset.photo} alt="photo" />
              </td>
            </tr>
          </tbody>
        </table>
        <p><a href="/list">» Return to List</a></p>
      </div>
    );
  }
}
fetch('/data')
  .then(
    function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not OK');
      }
    }
  )
  .then(
    function(data) {
      console.log(data.dataset);
      const root = ReactDOM.createRoot(document.getElementById('app'));
      const pageURL = window.location.pathname.split('/');
      console.log(pageURL);
      if (pageURL[1]==='item' && pageURL.length > 2) {
        const itemNum = Number(pageURL[2]);
        root.render(<FullItem dataset={data.dataset[itemNum -1]} />);
      } else {
        root.render(<ListTable dataset={data.dataset} />);
      }
    }
  )