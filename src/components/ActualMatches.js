import React from 'react'
import matches from '../simpleDB/matchesDB';
import finished from '../simpleDB/finishedDB';
import { useState } from 'react';
import FinishedMatches from './FinishedMatches';



const ActualMatches = () => {

const [removeMatch, setRemoveMatch] = useState(matches);
const [addMatch, setAddMatch] = useState([]);
const [startMatch, setStartMatch] = useState(matches)



const removeHandler = (id) => {
        
    const newList = removeMatch.filter((l) => l.id !== id)
        
        setRemoveMatch(newList);

        const add = removeMatch.filter((l) => l.id === id );

        const obb = add[0];

        setAddMatch([obb, ...addMatch])
};

const startHandler = (id) => {
    const starter = removeMatch.filter((l) => l.id === id);
    console.log(starter)
    const startHome = starter[0].home = 0;
    const startAway = starter[0].away = 0;

    setStartMatch([...startMatch, startHome, startAway ])
    
}

return (
    <div className='actual-matches'>
        <h2>Matches ongoing</h2>
        <div className="place">
                        <h3>Home</h3>
                        <h3>Away</h3>
                    </div>
        <ul className='all-matches'>
           
         {removeMatch.map((team) => {
             return <li  key={team.id} className='list-item'>
             <div className="teams">
                 <div className="duel">
                     <div className="result">{team.teamOne}</div>
                     <div className="result">
                         <div className="goals">{team.home}</div>
                         <div className="hyphen">-</div>
                         <div className="goals">{team.away}</div>
                     </div>
                     <div className="result">{team.teamTwo}</div>
                 </div>
             </div>
             <div className="btns">
                 <button onClick={() => startHandler(team.id)}>START</button>
                 <button>UPDATE</button>
                 <button onClick={() => removeHandler(team.id)}>FINISH</button>
             </div>
         </li>
            })}
        </ul>
        <h2>Finished Matches</h2>
        <ul className='all-matches'>
                {addMatch.map((finish) => {
                    return <li key={finish.id} className='list-item'>
                        <div className="teams">
                 <div className="duel">
                     <div className="result">{finish.teamOne}</div>
                     <div className="result">
                         <div className="goals">{finish.home}</div>
                         <div className="hyphen">-</div>
                         <div className="goals">{finish.away}</div>
                     </div>
                     <div className="result">{finish.teamTwo}</div>
                 </div>
             </div>
             </li>
                })}
            </ul>
     </div>
    
   
  )
}

export default ActualMatches