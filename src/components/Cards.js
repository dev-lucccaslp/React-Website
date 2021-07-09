import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (

        
        <div className='cards'>

            <h1>SUMMARY</h1>
            
            <p>My name is Lucas, I study programming since 2020, programming is an area that I fell in love with, I'm increasingly looking to improve my knowledge, I currently have knowledge in HTML, CSS, Javascript,React and node. I'm studying Systems Analysis and Development.</p>
            
            <img className="img_me" src='images/a.png'></img>
            <h1>COME MEET ME A LITTLE</h1>
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
