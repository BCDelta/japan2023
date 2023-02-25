import React from 'react'
import TokyoData from './data/tokyoData'
import TokyoCard from './components/TokyoCard'

export default function Tokyo() {

  function togglePrice() {
    setFilter(prevFilter => prevFilter = 1)
  }
  function toggleReserve() {
    setFilter(prevFilter => prevFilter = 2)
  }
  function resetFilter() {
    setFilter(prevFilter => prevFilter = 0)
  }
  const [setting, setFilter] = React.useState(0)
  
  const cards = TokyoData.map(item => {
    return (
      <TokyoCard
        key = {item.id} 
        title = {item.title}
        description = {item.description}
        img = {item.thumbnail}
        location = {item.location}
        price = {item.price}
        reservation = {item.reservation}
        appointment = {item.appointment}
        link = {item.link}
        number = {setting}
      />
    )
  })

    return (
      <div>
        <div className = "filters">
          <h3>Filters</h3>
          <button onClick={togglePrice}><h5>Free</h5></button>
          <button onClick={toggleReserve}><h5>Reservation Only</h5></button>
          <button onClick={resetFilter}><h5>Reset</h5></button>
        </div>
        <div className = "things-to-do">
          {cards}
        </div>
      </div>
    )
}