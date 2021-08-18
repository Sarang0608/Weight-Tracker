import React, { useState} from 'react'
import Header from './components/Header/Header'
import WeightForm from './components/WeightForm/WeightForm'
import WeightGraph from './components/WeightGraph/WeightGraph'

function App() {

  let [liftedState, setLiftedState] = useState([])

  function handleLiftedState(state) {
    setLiftedState(state)
  }

  // useEffect(() => {
  //   console.log(liftedState)
  // }, [liftedState])

  return (
    <>
      <Header />
      <WeightGraph weightData = {liftedState}/>
      <WeightForm liftState = {handleLiftedState}/>
    </>
  );
}

export default App;
