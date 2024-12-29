import { PlusCircle } from 'phosphor-react'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'
import styles from './App.module.css';
import { HeaderProgress } from './components/HeaderProgress';
import { ListTasks } from './components/ListTasks';
import { useState, useEffect } from 'react';
import { Empty } from './components/Empty';

export type ITask = {
  id: number;
  text: string;
  isChecked: boolean;
}

function App() {
  const [countCreatedTasks, setCountCreatedTasks] = useState(0);
  const [tasks, setTasks] = useState<ITask[]>([]); // Inicializa com um array vazio de tarefas
  const [newTask, setNewTask] = useState<ITask>({ id: 0, text: '', isChecked: false }); // Estado para nova tarefa
  const [countCompletedTasks, setCountCompletedTasks] = useState(0)

  // Função para alternar o status de checado
  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value };
      }
      return task;
    });

    setTasks(updatedTasks); // Atualiza as tarefas no estado
  }

  // Função que atualiza o texto da nova tarefa
  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask({ ...newTask, text: event.target.value }); // Atualiza o texto da nova tarefa
  }

  // Função para criar uma nova tarefa
  function handleCreateNewTask() {
    if (newTask.text.trim() !== '') { // Verifica se o texto da tarefa não está vazio
      const newTaskObj: ITask = {
        id: Date.now(), // ID único para a nova tarefa
        text: newTask.text,
        isChecked: false, // Inicia com o checkbox desmarcado
      };
      setTasks([...tasks, newTaskObj]); // Adiciona a nova tarefa ao estado
      setNewTask({ id: 0, text: '', isChecked: false }); // Limpa o campo de input
      setCountCreatedTasks(prev => prev + 1); // Incrementa o contador de tarefas
    }
  }

  // Função para remover uma tarefa
  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id); // Remove a tarefa do estado

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return;
    }

    setTasks(filteredTasks); // Atualiza as tarefas restantes
    setCountCreatedTasks(prev => prev - 1); // Decrementa o contador de tarefas
  }

  // UseEffect para atualizar a contagem de tarefas completas sempre que tasks mudar
  useEffect(() => {
    const tasksCompleted = tasks.filter(task => task.isChecked).length;
    setCountCompletedTasks(tasksCompleted);
  }, [tasks]); // Recalcula a contagem sempre que tasks mudar

  return (
    <div className="content">
      <main>
        <Header />
        <section className={styles.content}>
          <div className={styles.taskInfoContainer}>
            <Input
              placeholder="Adicione uma nova tarefa"
              onChange={handleNewTaskChange}
              value={newTask.text} // Valor controlado com o texto da nova tarefa
            />
            <Button onClick={handleCreateNewTask}>
              Criar
              <PlusCircle size={16} color="#f2f2f2" weight="bold" />
            </Button>
          </div>
          <div>
            <HeaderProgress countCreatedTasks={countCreatedTasks} countCompletedTasks={countCompletedTasks} />

            {countCreatedTasks > 0 ? (
              tasks.map((task) => (
                <ListTasks
                  key={task.id} // Usa o id único da tarefa como chave
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))
            ) : (
              <Empty />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
