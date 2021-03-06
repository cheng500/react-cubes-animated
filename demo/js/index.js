/**
 * @flow
 */
'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import AnimatedCubes from '../../dist'

const App = () => {
  const [numberOfCubes, setNumberOfCubes] = React.useState(5)
  const [maxEdgeLength, setMaxEdgeLength] = React.useState(500)
  const [minEdgeLength, setMinEdgeLength] = React.useState(100)
  const [maxFallingSpeed, setMaxFallingSpeed] = React.useState(10)
  const [minFallingSpeed, setMinFallingSpeed] = React.useState(5)
  const [maxRotationSpeed, setMaxRotatonSpeed] = React.useState(0.03)
  const [minRotationSpeed, setMinRotationSpeed] = React.useState(0.01)

  const handleChangeCubes = (event) => {
    setNumberOfCubes(Number(event.target.value))
  }
  const handleChangeMaxEdgeLength = (event) => {
    setMaxEdgeLength(Number(event.target.value))
  }
  const handleChangeMinEdgeLength = (event) => {
    setMinEdgeLength(Number(event.target.value))
  }
  const handleChangeMaxFallingSpeed = (event) => {
    setMaxFallingSpeed(Number(event.target.value))
  }
  const handleChangeMinFallingSpeed = (event) => {
    setMinFallingSpeed(Number(event.target.value))
  }
  const handleChangeMaxRotationSpeed = (event) => {
    setMaxRotatonSpeed(Number(event.target.value))
  }
  const handleChangeMinRotationSpeed = (event) => {
    setMinRotationSpeed(Number(event.target.value))
  }
  return (
    <div style={{ width: '100vw', height: '100vh', color: 'white' }}>
      <AnimatedCubes
        maxEdgeLength={maxEdgeLength}
        minEdgeLength={minEdgeLength}
        maxFallingSpeed={maxFallingSpeed}
        minFallingSpeed={minFallingSpeed}
        maxRotationSpeed={maxRotationSpeed}
        minRotationSpeed={minRotationSpeed}
        numberOfCubes={numberOfCubes}
      >
        <div style={{
          display: 'flex',
          position: 'absolute',
          width: '100%',
          bottom: 20,
          alignItems: 'center',
          justifyContent: 'space-around'
        }}>
          <div>
            <div>Number of Cubes: { numberOfCubes }</div>
            <input
              type="range"
              min="1"
              max="10"
              value={numberOfCubes}
              onChange={handleChangeCubes}
            />
          </div>
          <div>
            <div>
              <div>Minimum Edge Length: {minEdgeLength}</div>
              <input
                type="range"
                min={100}
                max={500}
                step={50}
                value={minEdgeLength}
                onChange={handleChangeMinEdgeLength}
              />
            </div>
            <div>
              <div>Maximum Edge Length: {maxEdgeLength}</div>
              <input
                type="range"
                min={100}
                max={1000}
                step={50}
                value={maxEdgeLength}
                onChange={handleChangeMaxEdgeLength}
              />
            </div>
          </div>
          <div>
            <div>
              <div>Minimum Falling Speed: {minFallingSpeed}</div>
              <input
                type="range"
                min={5}
                max={50}
                step={5}
                value={minFallingSpeed}
                onChange={handleChangeMinFallingSpeed}
              />
            </div>
            <div>
              <div>Maximum Falling Speed: {maxFallingSpeed}</div>
              <input
                type="range"
                min={5}
                max={100}
                step={5}
                value={maxFallingSpeed}
                onChange={handleChangeMaxFallingSpeed}
              />
            </div>
          </div>
          <div>
            <div>
              <div>Minimum Rotation Speed: {minRotationSpeed}</div>
              <input
                type="range"
                min={0.01}
                max={0.1}
                step={0.01}
                value={minRotationSpeed}
                onChange={handleChangeMinRotationSpeed}
              />
            </div>
            <div>
              <div>Maximum Rotation Speed: {maxRotationSpeed}</div>
              <input
                type="range"
                min={0.03}
                max={0.2}
                step={0.01}
                value={maxRotationSpeed}
                onChange={handleChangeMaxRotationSpeed}
              />
            </div>
          </div>
        </div>
      </AnimatedCubes>
    </div>
  )
}

const wrapper = document.getElementById("main")
wrapper && ReactDOM.render(<App />, wrapper)
