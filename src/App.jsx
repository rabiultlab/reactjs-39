import './App.css'
import Friends from './Friends';
import Team from './Team';
import Users from './Users';
import Counter from './counter';



function App() {

  function handleClick() {
    alert('button clicked');
  }

  const hangleClick2 = () => {
    alert('button clicked 2');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/* <button onClick="handleClick"()>Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={hangleClick2}>Click2</button>
      <button onClick={() => { alert('Clicked 3') }}>Click3</button>
      <button onClick={()=>addToFive(3)}>Four</button>
    </>
  )
}

export default App
