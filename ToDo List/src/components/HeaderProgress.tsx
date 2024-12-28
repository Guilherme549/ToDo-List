import styles from './HeaderProgress.module.css'

export function HeaderProgress(){
    return (
        <header className={styles.headerProgress}>
            <aside>
                <p>Tarefas criadas</p>
                <span>0</span>
            </aside>
            
            <aside>
                <p>Concluídas</p>
                <span>0</span>
            </aside>
        </header>
    )
}