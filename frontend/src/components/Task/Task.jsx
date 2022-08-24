import { useState, useEffect } from 'react';
import { editTask, deleteTask } from '../../services/taskService';

import ucfirst from '../../services/upperCaseFirst';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

library.add(faPenToSquare);

function Task(props) {
    const { task, tasks, setTasks } = props;
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (e) => {
        if (isEditing) {
            const editedTask = {
                id: task._id,
                name: document.getElementById('edit-task-name-input').value,
            };
            editTask(editedTask)
                .then((updatedTask) => {
                    setTasks(
                        tasks.map((t) =>
                            t._id === updatedTask._id ? updatedTask : t
                        )
                    );
                    setIsEditing(false);
                })
                .catch((err) => {
                    console.error(err.message);
                    if (err.message === 'User not logged in.') {
                        navigate('/login');
                    }
                });
        } else {
            setIsEditing(true);
        }
    };

    const handleDelete = (e) => {
        if (e.target.checked) {
            deleteTask(task)
                .then((isTaskDeleted) => {
                    if (!isTaskDeleted) {
                        throw new Error('Task not deleted');
                    }

                    setTasks(tasks.filter((t) => t._id !== task._id));
                })
                .catch((err) => {
                    console.error(err.message);
                    if (err.message === 'User not logged in.') {
                        navigate('/login');
                    }
                });
        }
    };

    useEffect(() => {
        if (isEditing) {
            const input = document.getElementById('edit-task-name-input');
            input.select();
        }
    }, [isEditing]);

    if (!isEditing) {
        return (
            <li className="row mb-3 g-2">
                <div className="col-auto form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="task-done"
                        onChange={handleDelete}
                    />
                </div>
                <div className="col">{ucfirst(task.name)}</div>
                <div className="col-auto">
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                    </button>
                </div>
            </li>
        );
    } else {
        return (
            <li className="row mb-3 g-2">
                <div className="col">
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        id="edit-task-name-input"
                        defaultValue={task.name}
                        onKeyDown={(e) => {
                            if (e.key === 'Escape') {
                                setIsEditing(false);
                            }
                            if (e.key === 'Enter') {
                                handleEdit();
                            }
                        }}
                    />
                </div>
                <div className="col-auto">
                    <button
                        type="button"
                        className="btn btn-success btn-sm"
                        onClick={handleEdit}
                    >
                        Validate
                    </button>
                </div>

                <div className="col-auto">
                    <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => setIsEditing(false)}
                    >
                        Cancel
                    </button>
                </div>
            </li>
        );
    }
}

export default Task;
