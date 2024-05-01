import React, {Component} from 'react';
import './index.css';

class AddItem extends Component {

    render () {
        return (
            <form
                className="d-flex add-item-form"
                onSubmit={ null }
            >
                <input
                    type="text"
                    className="form-control"
                    placeholder="What needs to be done"
                    onChange={ null }
                    value={''}
                ></input>
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >
                    Add
                </button>
            </form>
        );
    };
};

export default AddItem;
