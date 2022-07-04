import { Counter } from "./components/Counter";
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";

function App() {
  return (
    <>
      <h1> &lt;/ NOVA &gt; App </h1>
      <hr />

      <Counter />
      <br />
      <Usuario />

      <h2>useEffect - useRef</h2>
      <hr />

      <TimerPadre />
    </>
  );
}

export default App;
