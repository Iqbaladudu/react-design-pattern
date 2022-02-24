import './App.css'
import ControlledForms from './ControlledForms'
import { UncontrolledModal } from './UncontrolledModal'
import UncontrolledForms from './UncontrolledForms'
import { useState } from 'react'
import { ControlledModal } from './ControlledModal'
import UncontrolledOnboardingFlow from './UncontrolledOnboardingFlow'
import ControlledOnboardingFlow from './ControlledOnBoardingFlow'

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: 'Muhammad Iqbal' })}>Next</button>
  </>
)
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 10 })}>Next</button>
  </>
)
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={() => goToNext({ hairColor: 'Black' })}>Next</button>
  </>
)

function App() {
  const [shouldShowModal, setShouldShowModal] = useState()

  const [onboardingData, setOnboardingData] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)

  const onNext = stepData => {
    setOnboardingData({ ...onboardingData, ...stepData })
    setCurrentIndex(currentIndex + 1)
  }

  console.log(onboardingData)

  return (
    <>
      {/* <ControlledModal shouldShow={shouldShowModal} onRequestClose={() => {
        setShouldShowModal(false)
      }}>
        <h1>Hello</h1>
      </ControlledModal>

      <button onClick={() => setShouldShowModal(!shouldShowModal)}>{shouldShowModal ? 'Hide Modal' : 'Show Modal'}</button> */}
      <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </ControlledOnboardingFlow>
    </>
  )
}

export default App
