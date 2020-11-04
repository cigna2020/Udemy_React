import React, { Component } from 'react';

export default class PostListItem extends Component {

    render() {
        const { label, onDelete, onToggleImportent, onToggleLiked, important, like } = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important' // пробел перед important обьязателен, так как формируем строку
        }

        if (like) {
            classNames += ' like'
        }

        return (
            <form className={classNames}>
                <span
                    className="app-list-item-label"
                    onClick={onToggleLiked}
                >
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-star btn-sm"
                        onClick={onToggleImportent}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </form>

        )
    }
}
