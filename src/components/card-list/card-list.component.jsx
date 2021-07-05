import React from 'react';
import './card-list.style.css';
import {Card} from '../card/card'

export const CardList = (props) => {
return(
<div className="card-list">
    {
        props.monsters.map(items => 
        <Card key={items.id} monsters={items} />
        )
    }
</div>
)

}