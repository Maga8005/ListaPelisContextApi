import React from 'react'
import { createContext, useState } from 'react'

const UserContext = createContext();
const initialUser = {id:1, name:'Maria', favoriteMovie: [1,3,4]}

const UserProvider = ({children})=>{
  const [user, setUser] = useState(initialUser)

  const login = () => {
    setUser(initialUser);
  }

  const logout = () =>{
    setUser(null);
  }

  const toggleFavoriteMovieToUser = (movieId)=> {

    const isFavorite = user?.favoriteMovie?.includes(movieId);
    const favoriteMovie = isFavorite
      ? user.favoriteMovie.filter(favMovId => favMovId !== movieId)//Delete
      : [...user.favoriteMovie, movieId]//Add

    setUser ({
      ...user,
      favoriteMovie
    })
  }

  const data = {user, login, logout, toggleFavoriteMovieToUser}

  return(
    <UserContext.Provider value={data}>
      {children}
    </UserContext.Provider>
  )
}

export {UserProvider}
export default UserContext;