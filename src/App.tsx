import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomeScreen } from "pages/HomeScreen";
import { NewRoom } from "pages/NewRoom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const AuthContext = createContext({} as any);

function App() {
  const [user, setUser] = useState();

  function signWithGoogle(){
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
        if(result.user){
          const {displayName, photoURL, uid} = result.user;

          if(!displayName || !photoURL){
            throw new Error('Missing information from Google Account.');
          }

          //parei faltando 26:49
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
          })
        }
    });  
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* tudo que estiver dentro do component provider,
            conseguirá ser enxergado em todas as rotas
        */}
        <AuthContext.Provider value={{ user, signWithGoogle }}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/rooms/new" element={<NewRoom />} />
        </AuthContext.Provider>
      </Routes>
    </BrowserRouter>

  );
}

export default App;