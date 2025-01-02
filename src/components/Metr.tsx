import React, { useState } from 'react';
import Rooms from './Rooms';
import HomeColor from './HomeColor';
import './css/Metr.css'

const Metr = () => {
    const [nextto, setNextto] = useState(true);
    const [rooms, setRooms] = useState(false);
    const [homeColor, setHomeColor] = useState(false);
    const [progressto, setProgressto] = useState(false);
    const [mains, setMain] = useState(true);
    const [quas, setQuas] = useState(true);

    const next = () => {
        setProgressto(true);
        setMain(false);
        setHomeColor(true);
        setNextto(false)
        setQuas(false)
    };

    return (
        <div>
            {mains && (
                <div className="radio-group">
                    <label className="radio">
                        <input type="radio" name="floor" id="floor1" />
                        <span className="custom-radio"></span> 40кв.м
                    </label>
                    <label className="radio">
                        <input type="radio" name="floor" id="floor2" />
                        <span className="custom-radio"></span> 60кв.м
                    </label>
                    <label className="radio">
                        <input type="radio" name="floor" id="floor3" />
                        <span className="custom-radio"></span> 81кв.м
                    </label>
                    <label className="radio">
                        <input type="radio" name="floor" id="floor4" />
                        <span className="custom-radio"></span> 10кв.м
                    </label>
                </div>
            )}

            {progressto && <div className="progressto-3"></div>}
            {quas && <h1 className='quastion'>Выберите сколько кв.м хотите.</h1>}

            {nextto && <button onClick={next} className="btn">Далее</button>}
            {rooms && <Rooms />}
            {homeColor && <HomeColor />}
        </div>
    );
};

export default Metr;
