import React from 'react'
import './timer.scss'
const Timer = () => {
  return (
    <div className='timerContainer'>
      <div className='timerDays boxTime' >
        <div className='styleCalendarTop'>
          <div className='styleTop'></div>
          <div className='styleTop'></div>
          <div className='styleTop'></div>
        </div>
        <div className='styleCalendarContent'>
          <span>15d</span>
        </div>
      </div>
      <div className='timerDays boxTime' >
        <div className='styleCalendarTop'>
          <div className='styleTop'></div>
          <div className='styleTop'></div>
          <div className='styleTop'></div>
        </div>
        <div className='styleCalendarContent'>
          <span>24h</span>
        </div>
      </div>
      <div className='timerDays boxTime' >
        <div className='styleCalendarTop'>
          <div className='styleTop'></div>
          <div className='styleTop'></div>
          <div className='styleTop'></div>
        </div>
        <div className='styleCalendarContent'>
          <span>12s</span>
        </div>
      </div>
    </div>
  )
}

export default Timer;