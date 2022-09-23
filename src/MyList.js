import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {

  state = {
    taskArray: this.props.theList,
    newItem: ""
  }

  
  clearList = () => {
    console.log('clearing list!')
    this.setState({
      taskArray: []
    })
  }
  
  handleChange = e => {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = e => {
    console.log(`added`, this.state.newItem)
    e.preventDefault()
    this.setState(prevState => {
      return{
        taskArray: [...prevState.taskArray, prevState.newItem],
        newItem: ''
      }
    })
  }

  render(){
    let toDoItems = this.state.taskArray.map((item, i) =>{
      return <ListItem
        task={item}
        key={`item-${i}`}
      />
    })
    return(
      <div>
        <h1>
          Things I should stop procrastinating
        </h1>

        <ul>
            {toDoItems}
        </ul>

        <form onSubmit={this.addItem}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.newItem}
          />
          <button type='submit'>Add it!</button>
        </form>

        <button onClick={this.clearList}>Finished the list!</button>
      </div>
    )
  }
}

export default MyList