import { useState } from 'react'
import './Styles/Form.css'
import validate from './validation'

const Form = ({login}) => {

    const textH1 = '< Bienvenido a la app de rick and morty />'

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const [errorsE,setErrorsE] = useState({
        email: ''
    })

    const [errorsP, setErrorsP] = useState({
        password: ''
    })

    const handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value

        setData({ ...data, [property]: value })

        validate({ ...data, [property]: value },setErrorsE,errorsE,setErrorsP,errorsP);
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        login(data)
    }

    return (
        <div className="wallp">
            <div className="form">
                <div className="cardForm">
                    <form>
                        <div className="email">
                            <label htmlFor="">Email:</label>
                            <input
                                type="text"
                                name='email'
                                value={data.email}
                                onChange={handleChange}
                            />
                            <p>{errorsE.email}</p>
                        </div>

                        <div className="password">
                            <label htmlFor="">Password:</label>
                            <input
                                type="text"
                                name='password'
                                value={data.password}
                                onChange={handleChange}
                            />
                            <p>{errorsP.password}</p>
                        </div>

                        <button className='btnForm' onClick={handleSubmit}>Submit</button>
                    </form>
                </div>

                <div className="rickAndMortyApp">
                    <h1>{textH1
                    }</h1>
                </div>

            </div>
        </div>

    )
}

export default Form