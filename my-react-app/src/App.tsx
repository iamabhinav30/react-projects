import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { TodoList } from './components/TodoList';
import { useAppContext } from './providers/AppContentProviders';
import { appCounter } from './providers/actions';

function App() {
  const [count, setCount] = useState(0);

  const { state, dispatch } = useAppContext();


  const handleIncrement = () => {
    dispatch(appCounter.action(state.isCounter + 1));
  };


  return (
    <main className="app-container">
      <h1 className="app-title">🎉 Welcome to Your React Starter Project</h1>

      <p className="app-subtitle">
        This project was scaffolded with <strong>react-starter-pro CLI</strong>. It includes built-in
        architecture with <code>useReducer + useContext</code> for global state management.
      </p>

      <div className="card">
        <button onClick={handleIncrement}>
          🚀 <TodoList />
        </button>
      </div>


      <div className="instructions">
        <h2>🔍 Project Structure Overview</h2>
        <ul>
          <li>
            <strong>Global State:</strong>{' '}
            <code>src/providers/appContentProviders/AppContentProviders.tsx</code> – wraps the app with context
          </li>
          <li>
            <strong>Reducer Logic:</strong>{' '}
            <code>src/providers/reducers/appReducer.ts</code> – handles state transitions
          </li>
          <li>
            <strong>Actions:</strong>{' '}
            <code>src/providers/actions/index.ts</code> – central place to define action creators
          </li>
          <li>
            <strong>App Entry:</strong> <code>src/App.tsx</code> – example usage of global state
          </li>
          <li>
            <strong>Styling:</strong> <code>src/App.css</code> – customize UI globally
          </li>
        </ul>

        <h3>🚀 Features Included</h3>
        <ul>
          <li>✅ State management via <code>useReducer + useContext</code></li>
          <li>✅ Scalable folder structure (components, providers, actions)</li>
          <li>✅ ESLint + Prettier (if selected)</li>
          <li>✅ Husky Git hooks (if selected)</li>
          <li>✅ Tailwind CSS (if selected)</li>
          <li>✅ React Router ready (if selected)</li>
        </ul>

        <h3>📘 Next Steps</h3>
        <ul>
          <li>🔧 Add new actions in <code>/providers/actions</code></li>
          <li>🧠 Update reducer logic in <code>/reducers/appReducer.ts</code></li>
          <li>🧱 Create new UI components inside <code>/components</code></li>
          <li>🧪 Add tests using Jest or React Testing Library</li>
          <li>🌐 Add routing support by integrating <code>react-router-dom</code> (if not already)</li>
        </ul>
      </div>

      <footer className="footer text-center mt-5">
        🚀 Built with <code>react-starter-pro</code> by Abhinav Singh. <br />
        Happy Coding! ❤️
      </footer>
    </main>
  );
}

export default App
