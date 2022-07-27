const fetchTasks = async () => {
    const response = await fetch('/api/v1/tasks');
    const json = await response.json();
    return json;
};

export { fetchTasks };
