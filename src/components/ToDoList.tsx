const ToDoList = ({ tasks }) => (<ol>
    {tasks.map(((task: string, i: number) => (
        <li key={i}>
            {task}
        </li>
    )))}
</ol>)

export default ToDoList;