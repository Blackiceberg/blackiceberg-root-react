import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"))


function affichage () {

  return(
      <main>
        <img src="/src/assets/react.svg" alt="" />
        <h1>Ngazidja</h1>
        <ul>
          <li>good small</li>
          <li>Natural Flavors</li>
          <li>Slip Nice, Swim nice</li>
        </ul>
      </main>
  )
}

root.render(
  affichage()
)