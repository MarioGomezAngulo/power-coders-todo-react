import { Link } from 'react-router-dom';

import styles from './Todo.module.css';
import trashCan from '../assets/images/trash-can.svg';
import checkbox from '../assets/images/checkbox-checked.svg';
import checkBoxNotChecked from '../assets/images/checkbox-not-checked.svg';

function Todo({ todo, deleteTodo, checkButton }) {
  const deleteButtonHandler = () => {
    deleteTodo(todo.id);
  };

  const checkButtonHandler = () => {
    checkButton({ id: todo.id, done: !todo.done });
  };

  const icon = todo.done ? checkbox : checkBoxNotChecked;

  return (
    <li className={styles.todo_item}>
      <span className={styles.content}>
        <Link className={styles.iconLink} onClick={checkButtonHandler}>
          <img src={icon} alt='' className={styles.icon} />
        </Link>
        {todo.content}
      </span>
      <button className={styles.trashButton} onClick={deleteButtonHandler}>
        <img src={trashCan} alt='Borrar' className={styles.trashCan} />
      </button>
    </li>
  );
}

export default Todo;
