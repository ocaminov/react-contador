import { useState } from "react"

function Counter() {
  //el estado
  const [contador, setContador] = useState(0)

  return (
    <div>
      <p>
        Haz hecho clic {contador} veces en este boton
      </p>
      <button onClick={() => setContador(contador+1)}>Incrementar</button>
    </div>
  )
}

export default Counter
