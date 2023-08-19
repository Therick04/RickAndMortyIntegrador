import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Deatil from './components/Detail.jsx';
import About from './components/About.jsx';
import Form from './components/Form.jsx'
import Favorites from './components/Favorites.jsx'
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions/actions.js'



function App() {

   const [characters,setCharacters] = useState([])
   const [agg,setAgg] = useState([])
   const [access,setAccess] = useState(false)

   function onSearch(id) {

      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name && !agg.includes(data.name)) {
            setCharacters((oldChars) => [...oldChars, data]);
            setAgg([...agg,data.name])
         } else {
            window.alert('Ups algo salio mal..');
         }
      });
   }

   //let animalsSelect = zoo.animals.filter(animalSpecie => animalSpecie.specie === selecSpecie)

   const dispatch = useDispatch()

   const onClose = (id) => {
      let noId = characters.filter(noID => noID.id !== Number(id))
      
      if(id)

      setCharacters(noId)

      let noAGG = noId.map(noAGG => noAGG.name)
      setAgg(noAGG)

      dispatch(removeFav(id))
   }

   const location = useLocation()

   const showNav = location.pathname !== '/'

   const email = 'rsumoza04@gmail.com'
   const password = '1234asd'

   const navigate = useNavigate();



   const login = (data) => {
      if(data.password === password && data.email === email){
         setAccess(true)
         navigate('/home')
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   return (
      <div className='App'>
         {showNav && (<Nav onSearch={onSearch}></Nav>)}

         <Routes>
            <Route path='/' element={<Form login = {login}></Form>}></Route>

            <Route path='/home' element={<Cards characters={characters} onClose={onClose}></Cards>}></Route>

            <Route path='/detail/:id' element={<Deatil></Deatil>}></Route>

            <Route path='/about' element={<About></About>}></Route>
         
            <Route path='/favorites' element={<Favorites onClose={onClose}></Favorites>} ></Route>
         </Routes>
      
      </div>

   );
}

export default App;
