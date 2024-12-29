import { Check, Trash } from 'phosphor-react'
import styles from './ListTasks.module.css'

type Props = {
    active: boolean
    onClick: () => void
}


export function ListTasks( { active, onClick }: Props){
    return (
        <div className={styles.listTasks}>
            <div>
                <label htmlFor="checkbox">
                    <input type="checkbox" name="checkbox"/>
                    <span><Check size={19} className={active ? `${styles.icon}` : `${styles.iconActive}`} onClick={onClick}/></span>
                    <p className={active ? ` `: styles.paragraphActivated}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                </label>
            </div>

            <button>
                <Trash size={16} color="#808080"/>
            </button>
        </div>
    )
}