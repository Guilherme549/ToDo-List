import { PlusCircle } from 'phosphor-react'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'
import styles from './App.module.css';
import { HeaderProgress } from './components/HeaderProgress';
import { ListTasks } from './components/ListTasks';
import { useState } from 'react';


function App() {
  const [activated, setActivated] = useState(true);

  function handleActivatedIconChek(){
    setActivated(prevState => !prevState)
  }

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
          <div>
            <HeaderProgress />
            <ListTasks active={activated} onClick={handleActivatedIconChek}/>
            {/* <Empty /> */}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
