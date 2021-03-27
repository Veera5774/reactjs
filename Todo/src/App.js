import React from 'react';

class App extends React.Component {
  state = {
    curText: [],
    filter: ""
  }

  //Update input value
  updateInput = (event) => {
    console.log(event.target.value);
    this.setState(
      { name: event.target.value }
    );
  }

  //Save input value
  saveInput = (event) => {
    var nameArr = this.state.curText;
    nameArr.push(this.state.name);   
    this.setState({curText:nameArr})
  }

  //Delete input value
  handleDelete = (i) => {
    var nameArr = this.state.curText;
    console.log(nameArr);
    console.log(i);
    nameArr.splice(i, 1);
    this.setState({curText:nameArr})
  };

  //Filter Item
  filterInput = (event) => {
    this.setState({search:event.target.value});
  }

  render() {
    return (
      <div className="custom-table">
        <div className="add-content">
          <input type="text" onChange={this.updateInput} />
          <button className="add-btn" onClick={this.saveInput}>Add</button>
        </div>
        <div className="search-content">
          <input type="text" placeholder="Highlight on here..." onChange={this.filterInput} />
        </div>
        <table>
          <thead>
            <tr>
              <td className="tlid">ID</td>
              <td className="tlname">Name</td>
              <td className="tlaction">Action</td>
            </tr>
          </thead>
          <tbody>
          {this.state.curText.map((items, i) => {
            if(this.state.search === items) {
              return <tr key={i} className="highlight">
                <td>{i+1}</td><td>{items}</td>
                <td><button onClick={() => this.handleDelete(i)}>Delete</button></td>
              </tr>
            } else {
              return <tr key={i+1}>
                <td>{i+1}</td>
                <td>{items}</td>
                <td><button onClick={() => this.handleDelete(i)}>Delete</button></td>
              </tr>
            }
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
