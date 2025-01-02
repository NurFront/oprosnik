import React, { useState } from 'react'
import './css/Color.css'
import Krysha from './Krysha'

const HomeColor = () => {

    const [progressto, setProgressto] = useState(false)
    const [nextto, setNextto] = useState(true)
    const [main, setMain] = useState(true)
    const [quas, setQuas] = useState(true)
    const [krysha, setKrysha] = useState(false)

    const next = () => {
        setProgressto(true)
        setMain(false)
        setQuas(false)
        setNextto(false)
        setKrysha(true)
    }

    return (
        <div>
            {main && <div className="radio-group">
                <label className="radio">
                    <input type="radio" name="floor" id="floor1" />
                    <span className="custom-radio"></span> Оранжевый
                </label>
                <label className="radio">
                    <input type="radio" name="floor" id="floor2" />
                    <span className="custom-radio"></span> Зеленный
                </label>
                <label className="radio">
                    <input type="radio" name="floor" id="floor3" />
                    <span className="custom-radio"></span> Синий
                </label>
                <label className="radio">
                    <input type="radio" name="floor" id="floor4" />
                    <span className="custom-radio"></span> Красный
                </label>
            </div>}

            {quas && <h1 className='quastion'>Выберите цвет которую хотите.</h1>}

            {progressto && <div className='progressto-4'></div>}

            {krysha && <Krysha />}

            {nextto && <button onClick={next} className='btn'>Далее</button>}
        </div>
    )
}

export default HomeColor