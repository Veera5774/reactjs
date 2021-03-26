import React from 'react';

class App extends React.Component {
  state = {
    curText: []
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

  render() {
    return (
      <div className="custom-table">
        <input type="text" onChange={this.updateInput} />
        <button onClick={this.saveInput}>Add</button>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
          {this.state.curText.map((items, i) => {
            return (
            <tr key={i+1}>
              <td>{i+1}</td>
              <td>
                {items}
              </td>
              <td>
                <button onClick={() => this.handleDelete(i)}>Delete</button> 
              </td>
            </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
