import React from "react";
import AppHeader from "../AppHeader";
import SearchBar from "../SearchBar";
import TodoList from "../TodoList";
import StatusFilter from "../StatusFilter";
import AddItem from "../AddItem";
import './index.css';

const App = () => {

    const todos = [
        {label: 'Drink Coffee', important: false},
        {label: 'Learn React', important: false},
        {label: 'Build Awesome Application', important: true},
    ];

    return (
        <div className={"app-todo"}>
            <AppHeader />
            <SearchBar />
            <StatusFilter />
            <TodoList
                todos={todos}
            />
            <AddItem />
        </div>
    );
};

export default App;
