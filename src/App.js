// import React, { useState } from "react";
// import Joueur1 from "./compenent/Joueur1";
// import Joueur2 from "./compenent/Joueur2";

// function App() {
//   const [cache, setCache] = useState(null);

//   const resetGame = () => {
//     setCache(null); // Reset to show Joueur1
//   };

//   return (
//     <div>
//       {!cache ? (
//         <Joueur1 onSetCache={(value) => setCache(value)} />
//       ) : (
//         <Joueur2 cache={cache} onReset={resetGame} />
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react'
import './App.css'
import JeuDe from './jeux';

function App() {
    const [cache, setCache] = useState('')

    const handleCache = (event) => {
        const value = event.target.value
        if (value === '' || (value >= 1 && value <= 6)) {
            setCache(value)
        }
    }

    const resetCache = () => {
        setCache('')
    }

    return (
        <>
            <JeuDe cache={cache} handleCache={handleCache} resetCache={resetCache}></JeuDe>
        </>
    )
}

export default App

