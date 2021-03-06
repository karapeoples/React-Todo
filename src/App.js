import React, {Component} from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const tasks =[
  {
    task: 'Organize Garage',
    id: 1,
    completed: false
  },
  {
    task: 'Clean Living Room',
    id: 2,
    completed: false
  },
  {
    task: 'Buy Bleach',
    id: 3,
    completed: false
  },
  {
    task: 'Vacuum Cabinets',
    id: 4,
    completed: false
  },
  {
    task: 'Pick/Price Paint',
    id: 5,
    completed: false
  },
  {
    task: 'Make Appointments',
    id: 6,
    completed: false
  },
];




class App extends Component {
  state = {
    toDoList: tasks,
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  //state changes below:

  

  addNewTask = newTaskName => {
    const newState = {
      ...this.state,
      toDoList: [
        ...this.state.toDoList,
        {
          task: newTaskName,
          id: Date.now(),
          completed: false,
          
        },
      ],
    };
    this.setState(newState);
  };


  toggleCompleted = id => {
    const newState = {
      ...this.state,
      toDoList: this.state.toDoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    };
    this.setState(newState);
  };


  clearCompleted = () => {
    const newState = {
      ...this.state,
      toDoList: this.state.toDoList.filter(item => {
        return !item.completed;
      }),
    };
    this.setState(newState);
  };

  
  render() {
    return (
      <div className='appDiv'>
        <div className='paper'>
          <div className='pattern'>
            <div className='notes'>
              <h1>Errand Tracker</h1>
              <TodoList errands={this.state.toDoList} toggleCompleted={this.toggleCompleted} />
            </div>
          </div>
        </div>
        <TodoForm addNewTask={this.addNewTask} clearCompleted={this.clearCompleted} />
      </div>
    );
  };
};

export default App;


