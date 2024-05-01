import React, {Component} from 'react';
import './index.css';

class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    }

    onLabelClick = () => {
        this.setState((prev) => {
            return {
                ...prev,
                done: !prev.done
            }
        });
    }

    render() {

        const {label, important, done} = this.props;

        let classNames = 'todo-list-item';

        if (this.state.done) {
            classNames += ' done';
        }

        return (
            <span className={classNames}>
              <span
                  className="todo-list-item-label"
                  onClick={ this.onLabelClick }
              >
                {label}
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
