import React, { useState } from 'react'
import Metr from './Metr'
import './css/Rooms.css'

const Rooms = () => {

    const [nextto, setNextto] = useState(true)
    const [metrs, setMetrs] = useState(false)
    const [main, setMain] = useState(true)
    const [progressto, setProgressto] = useState(false)
    const [quas, setQuas] = useState(true)

    const next = () => {
        setNextto(false)
        setMetrs(true)
        setMain(false)
        setProgressto(true)
        setQuas(false)
    }

    return (
        <>
            <div>
                {main && <div className="radio-group">
                    <label className="radio">
                        <input type="radio" name="floor" id="floor1" />
                        <span className="custom-radio"></span> 12 - комната
                    </label>
                    <label className="radio">
                        <input type="radio" name="floor" id="floor2" />
                        <span className="custom-radio"></span> 6 - комната
                    </label>
                    <label className="radio">
                        <input type="radio" name="floor" id="floor3" />
                        <span className="custom-radio"></span> 8 - комната
                    </label>
                    <label className="radio">
                        <input type="radio" name="floor" id="floor4" />
                        <span className="custom-radio"></span> 1 - комната
                    </label>
                </div>}

                {quas && <h1 className='quastion'>Выберите сколько комнат хотите.</h1>}

                {progressto && <div className='progressto-2'></div>}

                {nextto && <button onClick={next} className='btn'>Далее</button>}

                {metrs && <Metr />}

            </div>
        </>
    )
}

export default Rooms