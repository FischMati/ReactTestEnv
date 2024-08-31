const ToDoList = ({ tasks }) => (<ol>
    {tasks.map((task => (
        <li>
            {task}
        </li>
    )))}
</ol>)

export default ToDoList;