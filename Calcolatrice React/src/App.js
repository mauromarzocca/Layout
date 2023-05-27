import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="calculator-app">
      <div className="output"></div>
      <button>C</button>
      <button></button>
      <button>=</button>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-backspace" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5z"></path>
          <path d="M12 10l4 4m0 -4l-4 4"></path>
        </svg>
      </button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>x</button>
      <button>0</button>
      <button>-</button>
      <button>+</button>
    </div>
  );
}

export default App;
