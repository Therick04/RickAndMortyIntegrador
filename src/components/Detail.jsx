import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios';
import './Styles/Detail.css'

const Detail = () => {

    const [character, setCharacter] = useState([])

    const { id } = useParams()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);
    return (
        <div className="main">

            <div className="imgData">
                <img src={character.image} alt="" />
            </div>

            <div className="data">

                <div className="data1 d">
                    <h2>Name:</h2>
                    <p>{character.name}</p>
                </div>
                <div className="data2 d">
                    <h2>Status:</h2>
                    <p>{character.status}</p>
                </div>
                <div className="data3 d">
                    <h2>Specie:</h2>
                    <p>{character.species}</p>
                </div>
                <div className="data4 d">
                    <h2>Gender:</h2>
                    <p>{character.gender}</p>
                </div>
            </div>
        </div>
    )
}

export default Detail