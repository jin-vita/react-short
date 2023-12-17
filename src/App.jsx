import {useEffect, useState} from 'react'
import './App.css'
import TodoForm from "./todo/TodoForm.jsx";
import TodoItem from "./todo/TodoItem.jsx";

function App() {
    const [todo, setTodo] = useState([])

    useEffect(() => {

    }); // 리렌더링때마다 실행 - 매우 많이 실행

    useEffect(() => {
        // 이 컴포넌트가 마운트될 때 실행되는 함수
        return () => {
            // 이 컴포넌트가 언마운트될 때 실행되는 함수
        }
    }, []);

    useEffect(() => {
        // todo 가 바뀔 때마다 실행됨
        return () => {
            // todo 가 바뀌기 직전에 실행됨
        }
    }, [todo]);
    // todo 가 a -> b 변경시
    // a useEffect -> a cleanup -> b useEffect

    const onSubmit = (newTodo) => {
        // form 은 기본적으로 새로고침하니 그걸 방지하는 코드
        const nextTodo = [...todo, {title: newTodo, completed: false, id: Math.random()}]
        setTodo(nextTodo)
    }

    return (
        <>
            <div className="App">TODO</div>
            <div className="App">
                {todo.length === 0 ? (
                    <div>
                        <div>할 일을 추가해보세요.</div>
                        <TodoForm onSubmit={onSubmit}/>
                    </div>) : (
                    <>
                        {todo.map((it, i) => (<TodoItem key={it.id} index={i} item={it} setTodo={setTodo}/>))}
                        <TodoForm onSubmit={onSubmit}/>
                    </>)}
            </div>
        </>)
}

export default App
