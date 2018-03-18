import React, {Component} from 'react'
import PropTypes from 'prop-types'

export const Task = (props) => {
  const handleTitleClick = () => {
    props.onTitleClick && props.onTitleClick(props.task.id)
    console.log('title click')
  }

  const handleDeleteClick = () => {
    props.onDelete && props.onDelete(props.task.id)
    console.log('delete')
  }

  return (<div className="task">
    <div className="task__title" onClick={handleTitleClick}>{props.task.title}</div>
    <div className="task__delete" onClick={handleDeleteClick}>X</div>
    <div className="task__notes">{props.task.notes}</div>
    <div className="task__record">...</div>
    <div className="task__controls"></div>
  </div>)
}

export class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: this.props.tasks
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(id) {
    const tasks = this.state.tasks.filter(task => task.id != id)
    this.setState({tasks})
  }

  render() {
    return (<div className='tasks'>
      {this.state.tasks.map(task => {
        return <Task task={task} key={task.id} onDelete={this.handleDelete}/>
      })}
    </div>)
  }
}