import React from 'react'
import './css/Floor.css'

const Floor = () => {
    return (
        <>
        <div className="radio-group">
            <label className="radio">
                <input type="radio" name="floor" id="floor1" />
                <span className="custom-radio"></span> 1 - этажный
            </label>
            <label className="radio">
                <input type="radio" name="floor" id="floor2" />
                <span className="custom-radio"></span> 2 - этажный
            </label>
            <label className="radio">
                <input type="radio" name="floor" id="floor3" />
                <span className="custom-radio"></span> 3 - этажный
            </label>
            <label className="radio">
                <input type="radio" name="floor" id="floor4" />
                <span className="custom-radio"></span> 4 - этажный
            </label>
        </div>
        <h1 className='quastion'>Выберите сколько этажов хотите.</h1>
        </>
    )
}

export default Floor
