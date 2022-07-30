import { useState, useEffect } from 'react';
import { editTask, deleteTask } from '../../services/taskService';

function Task(props) {
    const { task, tasks, setTasks } = props;

    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (e) => {
        e.preventDefault();
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
                .catch((error) => {
                    alert(error);
                });
        } else {
            setIsEditing(true);
        }
    };

    const handleDelete = (e) => {
        e.preventDefault();

        deleteTask(task)
            .then((isTaskDeleted) => {
                if (!isTaskDeleted) {
                    throw new Error('Task not deleted');
                }

                setTasks(tasks.filter((t) => t._id !== task._id));
            })
            .catch((err) => {
                alert(err);
            });
    };

    useEffect(() => {
        if (isEditing) {
            const input = document.getElementById('edit-task-name-input');
            input.select();
        }
    }, [isEditing]);

    if (!isEditing) {
        return (
            <li>
                <span style={{ width: '150px', display: 'inline-block' }}>
                    {task.name}
                </span>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </li>
        );
    } else {
        return (
            <li>
                <form>
                    <input
                        type="text"
                        id="edit-task-name-input"
                        style={{ width: '150px', display: 'inline-block' }}
                        defaultValue={task.name}
                        onKeyDown={(e) => {
                            if (e.key === 'Escape') {
                                setIsEditing(false);
                            }
                        }}
                    />

                    <button type="submit" onClick={handleEdit}>
                        ok
                    </button>
                    <button type="button" onClick={() => setIsEditing(false)}>
                        cancel
                    </button>
                </form>
            </li>
        );
    }
}

export default Task;
