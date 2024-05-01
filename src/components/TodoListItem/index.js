import React, {Component} from 'react';
import './index.css';

class TodoListItem extends Component {

    render() {

        const {name, isImportant, done} = this.props;

        let classNames = 'todo-list-item';

        return (
            <span className={classNames}>
              <span
                  className="todo-list-item-label"
                  onClick={ null }
              >
                {name}
              </span>

              <button type="button"
                      className="btn btn-outline-success btn-sm float-right"
                      onClick={ null }
              >
                <i className="fa fa-exclamation" />
              </button>

              <button type="button"
                      className="btn btn-outline-danger btn-sm float-right"
                      onClick={ null }
              >
                <i className="fa fa-remove" />
              </button>
            </span>
        );
    }
}

export default TodoListItem;
