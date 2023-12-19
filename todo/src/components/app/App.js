// Хороший компонент - независимый компонент

import React, {Component} from 'react';
import AppHeader from "../app-header";
import SearchInput from "../search-input";
import TaskList from "../task-list";

import './app.css'
import StatusFilter from "../status-filter";
import ItemAdd from "../item-add";
import TodoService from "../../todo-service";

class App extends Component {
    service = new TodoService()
    constructor() {
        super();
        this.updateData()
    }

    state = {
        tasks: [],
        searchText: '',
        filterMode: 'all'
    }
    maxId = 1000;
    addItem = (text) => {
        this.service.addItem(text).then(r => {
            this.updateData();
        });
    }
    deleteItem = (id) => {

        this.service.deleteItem(id).then(r=>{
           this.updateData();
        });
    }

    onSearchChange = (searchText) => {
        this.setState({searchText})
    }

    search(tasks, searchText) {
        if (searchText.length === 0) {
            return tasks.filter((task) => {
                if (this.state.filterMode === 'Active') return !task.isCompleted;
                else if (this.state.filterMode === 'Done') return task.isCompleted
                else return task
            });
        }
        else
        {
            return tasks.filter((task) => task.text.toLowerCase().includes(searchText.toLowerCase())) &&
                (this.state.filterMode === 'All'||
                this.state.filterMode === 'Active' ||
                this.state.filterMode === 'Done');

        }


    }


    onFilterChanged = (filter) => {
        console.log(filter)
        this.setState({ filterMode: filter });
    }

    updateData = () => {
        this.service.getAll()
            .then((data) => {
                this.setState((items)=>{
                    const new_tasks = data.items;
                    return{
                        tasks: new_tasks
                    }
                })
            })
    }

    onChangeStatus = (id,status) =>{
        this.service.changeStatus(id,status);
    }

    render() {
        const {tasks, searchText,filterMode} = this.state
        const filteredTasks = this.search(tasks, searchText)

        return (
            <>
                <div className='app-todo'>
                    <AppHeader/>

                    <div className='top-panel d-flex'>
                        <SearchInput
                            placeText={"Search"}
                            onSearchChange={this.onSearchChange}/>
                        <StatusFilter text="All" active={filterMode} onBtnClicked={this.onFilterChanged}/>
                        <StatusFilter text="Active" active={filterMode} onBtnClicked={this.onFilterChanged}/>
                        <StatusFilter text="Done" active={filterMode} onBtnClicked={this.onFilterChanged}/>
                    </div>

                    <TaskList
                        tasks={filteredTasks}
                        onDeleted={this.deleteItem}
                        onChecked={this.onChangeStatus}
                    />
                    <ItemAdd onAdded={this.addItem}/>
                </div>
            </>
        )
    }
}

export default App