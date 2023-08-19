import React from 'react';
import Card from './Card';
import './Styles/CardMain.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className="mainMain">
         <div className='crdMain'>
            {characters.map((crd) => {
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
         </div>
      </div>
   );
}
