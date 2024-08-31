import { useEffect, useState } from 'react';
import styled from 'styled-components';

// Função para buscar tarefas do localStorage
const loadTasksFromLocalStorage = () => {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
};

// Função para salvar tarefas no localStorage
const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Estilização do container principal do TodoApp
const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #f9f9f9;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

// Estilização do título
const Title = styled.h1`
  color: #4a4a4a;
  margin-bottom: 20px;
`;

// Estilização da lista de tarefas
const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  width: 300px;
`;

// Estilização de cada item da lista de tarefas
const TaskItem = styled.li`
  background-color: #fff;
  margin: 10px 0;
  padding: 10px 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Estilização dos botões de ação
const Button = styled.button`
  background-color: #ff4757;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e84118;
  }
`;

// Estilização do botão de adicionar tarefa
const AddButton = styled(Button)`
  background-color: #1e90ff;
  margin-top: 20px;
  padding: 10px 15px;

  &:hover {
    background-color: #1c7ed6;
  }
`;

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Carrega as tarefas do localStorage na inicialização
    const tasks = loadTasksFromLocalStorage();
    setTasks(tasks);
  }, []);

  // Função para adicionar uma nova tarefa
  const addTask = (newTask) => {
    if (!newTask) return; // Evita adicionar tarefas vazias
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  // Função para remover uma tarefa
  const removeTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  return (
    <TodoContainer>
      <Title>Todo App</Title>
      {/* Lista de tarefas */}
      <TaskList>
        {tasks.map((task, index) => (
          <TaskItem key={index}>
            {task}
            <Button onClick={() => removeTask(index)}>Remove</Button>
          </TaskItem>
        ))}
      </TaskList>

      {/* Botão de adicionar tarefa */}
      <AddButton onClick={() => addTask(prompt('Enter a new task:'))}>
        Add Task
      </AddButton>
    </TodoContainer>
  );
};

export default TodoApp;
