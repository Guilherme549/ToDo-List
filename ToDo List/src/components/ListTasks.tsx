import { Trash } from 'phosphor-react'
import styles from './ListTasks.module.css'

export function ListTasks(){
    return (
        <div className={styles.listTasks}>
            <div>
                <label htmlFor="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <p>Task</p>
                </label>
            </div>

            <button>
                <Trash size={16} color="#808080"/>
            </button>
        </div>
    )
}