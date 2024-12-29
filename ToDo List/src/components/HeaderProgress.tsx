import styles from './HeaderProgress.module.css'

type Props = {
    countCreatedTasks: number
    countCompletedTasks?: number
}

export function HeaderProgress({ countCreatedTasks, countCompletedTasks = 0}: Props){
    return (
        <header className={styles.headerProgress}>
            <aside>
                <p>Tarefas criadas</p>
                <span>{countCreatedTasks}</span>
            </aside>
            
            <aside>
                <p>Concluídas</p>
                <span>{countCompletedTasks}</span>
            </aside>
        </header>
    )
}