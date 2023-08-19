import Card from "./Card"
import { connect, useDispatch } from 'react-redux'
import { filterCards, orderCards } from '../redux/actions/actions'
import { useState } from "react"
import './Styles/Favorites.css'

const Favorites = (props) => {

    const [aux,setAux] = useState(false)

    const dispatch = useDispatch()
    
    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
        setAux(!aux)
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    

    return (


    <div className="mainMain">
        <div className='crdMain'>
            {props.myFavorites.map((crd) => {
                return <Card
                id={crd.id}
                key={crd.id}
                name={crd.name}
                species={crd.species}
                gender={crd.gender}
                origin={crd.origin}
                image={crd.image}
                onClose={props.onClose}
                status={props.status}
                ></Card>
            })}

            <select onChange={handleOrder} className="selecAD">
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter} className="Gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
                <option value="all">All</option>
            </select>
        </div>
    </div>


    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites)