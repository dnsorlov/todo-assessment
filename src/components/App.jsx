import React                    from 'react'
import { connect }              from 'react-redux'
import { hot }                  from 'react-hot-loader/root'
import { bindActionCreators }   from 'redux'
import * as TodoActions         from '../redux/actions'
import TodoList                 from './TodoList';
import TodoInput                from './TodoInput';

import './App.styl';


const App = ( {todos, actions} ) => {

    const b = 'TODO';

    const handleSave = text =>
        text.length !== 0 && actions.addTodo(text);

    const completedCount =
        todos.reduce((count, todo) =>
            todo.completed ? count + 1 : count, 0
        );

    const allCount = todos.length;

    return (
        <div className={b}>
            <header className={b+'__header'}>
                <h1>Todos</h1>
                <TodoInput
                    isNew
                    onSave={handleSave}
                    placeholder="What you gonna do?"
                />
            </header>

            <section className={b+'__main'}>
                <TodoList {...{actions, todos}}/>
            </section>

            <footer className={b+'__footer'}>
                {`completed ${completedCount} of ${allCount}`}
            </footer>
        </div>
    )
};

const mapState = state => ({
    todos: state
});

const mapDispatch = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapState, mapDispatch)(hot(App))
