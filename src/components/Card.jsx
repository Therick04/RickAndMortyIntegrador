import React, { useEffect, useState } from "react";
import './Styles/Card.css'
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions/actions";
import { connect } from 'react-redux'

function Card(props) {
   if (props.status === 'Alive') {
      //en trabajo
   }


   const [isFav,setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav == true){
         setIsFav(!isFav)
         props.removeFav(props.id)
      } else {
         setIsFav(!isFav)
         props.addFav(props)
      }
   }

   const { myFavorites } = props

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      
      <div className="crd">
         {
            isFav ? (
         <button onClick={handleFavorite} className="fav">❤️</button>
      ) : (
      <button onClick={handleFavorite} className="fav">🤍</button>
   )
}
         <img src={props.image} alt='' />
         <button
            onClick={() => props.onClose(props.id)}
            className="btnDelete"
         >Delete</button>

         <Link to={`/detail/${props.id}`}>
            <button className="btnSeeMore">See more</button>
         </Link>

         <h3 className="status">  {props.status}</h3>

         <div className="b1">
            <h2 className="name">Name:</h2>
            <h3 className="name">{props.name}</h3>
         </div>

      </div>
   );
}

const mapStateToProps = (state) => {
      return {
         myFavorites: state.myFavorites
      }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (id) => {
         dispatch(addFav(id))
      },
      removeFav: (props) => {
         dispatch(removeFav(props))
      }
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)