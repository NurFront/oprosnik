import React, { useState } from 'react'
import './App.css'
import Floor from './components/Floor'
import Rooms from './components/Rooms'
import Metr from './components/Metr'

const App = () => {

  const [floor, setFloor] = useState(true)
  const [rooms, setRooms] = useState(false)
  const [progressto, setProgressto] = useState(false)
  const [nextto, setNextto] = useState(true)

  const next = () => {
    setFloor(false)
    setRooms(true)
    setProgressto(true)
    setNextto(false)
  }

  return (
    <>
      <img src="https://st.hzcdn.com/simgs/pictures/exteriors/pauoa-beach-luxury-home-mauna-lani-resort-panaviz-img~ccd1ceb3069ebe4a_14-9070-1-03dcbca.jpg" alt="" className='main-img' />

      <div className='progress'></div>
      {progressto && <div className='progressto'></div>}

      

      {nextto && <button className='btn' onClick={next}>Далее</button>}

      <div className='progress-0'></div>

      <div>

        {floor && <Floor />}
        {rooms && <Rooms />}

      </div>

      

    </>
  )
}

export default App