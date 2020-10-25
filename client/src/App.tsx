import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import {
  useGetTasksQuery,
  useUpdateIsDoneMutation,
  useInsertTaskMutation,
} from './generated/graphql';
import './tailwind.css';

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:8080/v1/graphql',
    }),
    cache: new InMemoryCache(),
  })
}

const TaskList = () => {
  const [values, setValues] = useState({
    name: '',
    content: '',
    isDone: false,
  })

  const [insertTaskMutation] = useInsertTaskMutation()

  const [updateTaskMutation] = useUpdateIsDoneMutation()

  const { loading, error, data, refetch } = useGetTasksQuery()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    setValues({ ...values, [name]: value })
  }

  const addTask = async () => {
    await insertTaskMutation({
      variables: {
        name: values.name,
        content: values.content,
        isDone: values.isDone,
      },
    })
    await refetch()
  }

  if (loading) {
    return <p>...loading</p>
  }
  if (error) {
    return <p>{error.toString()}</p>
  }

  if (typeof data == 'undefined') {
    return <div>error</div>
  }

  const ChangeHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.dataset.id
    const isDone = event.target.checked
    await updateTaskMutation({
      variables: {
        id: id as string,
        isDone: isDone,
      },
    })
  }

  return (
    <div className="max-w-sm rounded overflow-hidden">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="font-bold text-xl mb-2">Add Task</div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            name="name"
            defaultValue={values.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="content"
            name="content"
            defaultValue={values.content}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="isDone"
          >
            Done:
          </label>
          <input
            className="mr-2 leading-tight"
            type="checkbox"
            id="isDone"
            name="isDone"
            defaultChecked={values.isDone}
            onChange={handleInputChange}
          />
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="font-bold text-xl mb-2">Task List</div>
        {data.tasks.map((task) => {
          return (
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg"
              key={task.id}
            >
              <div className="text-gray-700 text-base">Title: {task.name}</div>
              {task.content ? (
                <div className="text-gray-700 text-base">
                  Content: {task.content}
                </div>
              ) : (
                ''
              )}
              <div className="text-gray-700 text-base">
                Done:{' '}
                <input
                  type="checkbox"
                  data-id={task.id}
                  defaultChecked={task.isDone}
                  onChange={ChangeHandler}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}


function App() {
  const client = createApolloClient()

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <TaskList />
      </div>
    </ApolloProvider>
  )
}

export default App;
