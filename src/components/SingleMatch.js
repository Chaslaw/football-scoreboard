import React from 'react'



const SingleMatch = () => {

     return (
       <li  className='list-item'>
            <div className="teams">
                <div className="duel">
                    <div className="result">x</div>
                    <div className="result">
                        <div className="goals">0</div>
                        <div className="hyphen">-</div>
                        <div className="goals">0</div>
                    </div>
                    <div className="result">x</div>
                </div>
            </div>
            <div className="btns">
                <button>START</button>
                <button>UPDATE</button>
                <button>FINISH</button>
            </div>
        </li>
    )
}

export default SingleMatch