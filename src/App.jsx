import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watch'

function App() {
  const [watches, setWatches] = useState([]);

  // useEffect(() => {
  //   fetch('watches.json')
  //   .then(res => res.json())
  //   .then(data => setWatches(data));
  // }, []) 

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/silpiakr/watches/refs/heads/main/watches.json')
    .then(res => res.json())
    .then(data => setWatches(data));
  }, []) 

  // const watches = [
  //   {id: 1, name: 'Apple Watch', price: 2000},
  //   {id: 2, name: 'Samsung Watch', price: 1500},
  //   {id: 3, name: 'MI Watch', price: 1000},
  //   {id: 4, name: 'Huawei Watch', price: 1200}
  // ]

  // const watches = [
  //   {
  //     "id": "SW001",
  //     "name": "Apple Watch Series 8",
  //     "price": 399.00
  //   },
  //   {
  //     "id": "SW002",
  //     "name": "Samsung Galaxy Watch 5",
  //     "price": 279.99
  //   },
  //   {
  //     "id": "SW003",
  //     "name": "Garmin Venu 2",
  //     "price": 399.99
  //   },
  //   {
  //     "id": "SW004",
  //     "name": "Fitbit Sense",
  //     "price": 329.95
  //   },
  //   {
  //     "id": "SW005",
  //     "name": "Amazfit GTR 3",
  //     "price": 199.99
  //   }
  // ]


  return (
    <>
      <h1>Watch Shop</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }

    </>
  )
}

export default App
