import { useState } from 'react'
import Hover from './components/Hover'
import List from './components/List'
import useInput from './hooks/useInput'
import useDebounce from './hooks/useDebounce'
import axios from 'axios'
import useRequest from './hooks/useRequest'

function App() {
	const username = useInput('')
	const password = useInput('')

	const [query, setQuery] = useState('')
	const debouncedSearch = useDebounce(search, 500)

	function search(query) {
		fetch(`https://jsonplaceholder.typicode.com/todos?query=` + query)
			.then(response => response.json())
			.then(json => {})
	}

	const onChange = e => {
		setQuery(e.target.value)
		debouncedSearch(e.target.value)
	}

	const [todos2, loading, error] = useRequest(fetchTodos2)
	function fetchTodos2(query) {
		return axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
	}

	return (
		<div>
			<input {...username} type='text' placeholder='Введите пользователя' />
			<input {...password} type='password' placeholder='Введите пароль' />
			<button onClick={() => console.log(username.value, password.value)}>
				Click
			</button>
			<hr />
			<Hover />
			<hr />
			<List />
			<hr />
			<input value={query} onChange={onChange} type='text' />
			<hr />
			<div>
				{loading ? (
					<h3>Loading...</h3>
				) : (
					todos2.map(todo => (
						<div
							key={todo.id}
							style={{ padding: 30, border: '2px solid black' }}
						>
							{todo.id}. {todo.title}
						</div>
					))
				)}
			</div>
		</div>
	)
}

export default App
