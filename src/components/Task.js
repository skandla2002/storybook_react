import React from 'react';
import PropTypes  from 'prop-types';

export default function Task({ task: {id, title, state}, onArchiveTask, onPinTask }){
    return (
        <div className="list-item">
            <input type="text" value={title} readOnly={true} />
        </div>
    );
}

Task.propTypes = {
    task: PropTypes.shape({
        // ID of the task
        id: PropTypes.string.isRequired,
        // title of the task
        title: PropTypes.string.isRequired,
        state:PropTypes.string.isRequired,
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func
}