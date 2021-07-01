import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1 id='teste'>COME MEET ME A LITTLE</h1>
            <div className="cards__container">
               <div className="cards__wrapper">
                    <ul className="cards__items">
                   
                    <CardItem
                        src ='images/projects.png' 
                        text='Know a little about my projects'
                        label='Some projects'
                        path='/projects'  
                    />

                    <CardItem
                        src ='images/skills2.png' 
                        text='Know a little about my skills'
                        label='Skill'
                        path='/skills'  
                    />

                    </ul>
               </div> 
            </div>
        </div>
    )
}

export default Cards
