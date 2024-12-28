import { PlusCircle } from 'phosphor-react'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'
import styles from './App.module.css';
import { HeaderProgress } from './components/HeaderProgress';
import { ListTasks } from './components/ListTasks';
import { Empty } from './components/Empty';

function App() {

  return (
    <div className='content'>
      <main>
        <Header/>
        <section className={styles.content}>
          <div className={styles.taskInfoContainer}>
            <Input placeholder='Adicione uma nova tarefa'/>
            <Button>
              Criar
              <PlusCircle size={16} color="#f2f2f2" weight="bold" />
            </Button>
          </div>
          <div className={styles.listTask}>
            <HeaderProgress />
            <Empty />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
