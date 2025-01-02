import React, { useState } from 'react'
import './css/Krysha.css'

const Krysha = () => {

    const [progressto, setProgressto] = useState(false)
    const [nextto, setNextto] = useState(true)
    const [mains, setMain] = useState(true)
    const [quas, setQuas] = useState(true)
    const [krysha, setKrysha] = useState(false)

    const next = () => {
        window.location.href = 'https://www.instagram.com/_zhenisho.v/'
    }

    return (
        <div>
            {mains && (
                <div className="radio-group">
                    <label className="radio">
                        <input type="radio" name="floor" id="floor1" />
                        <span className="custom-radio"></span> Зеленный
                    </label>
                    <label className="radio">
                        <input type="radio" name="floor" id="floor2" />
                        <span className="custom-radio"></span> Красный
                    </label>
                    <label className="radio">
                        <input type="radio" name="floor" id="floor3" />
                        <span className="custom-radio"></span> Серый
                    </label>
                    <label className="radio">
                        <input type="radio" name="floor" id="floor4" />
                        <span className="custom-radio"></span> Коричневый
                    </label>
                </div>
            )}

            {progressto && <div className="progressto-5"></div>}
            {quas && <h1 className='quastion'>Выберите какой цвет крыш хотите.</h1>}

            {nextto && <button onClick={next} className="btn">Далее</button>}
        </div>
    )
}

export default Krysha