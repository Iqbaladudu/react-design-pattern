import React from 'react'
import { SplitScreen } from './SplitScreen'

type LeftProps = {
  name: string
}

type RightProps = {
  message: string
}

const LeftHandComponent = ({ name }: LeftProps) => {
  return (
    <h1 style={{
      backgroundColor: 'purple',
    }}>{name}</h1>
  )
}

const RightHandComponent = ({ message }: RightProps) => {
  return (
    <h1 style={{
      backgroundColor: 'hotpink',
    }}>{message}</h1>
  )
}

const App = () => {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="Iqbal" />
      <RightHandComponent message="Aku Tamvan" />
    </SplitScreen>
  )
}

export default App