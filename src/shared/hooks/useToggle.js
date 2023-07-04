import {useState} from 'react'

const useToggle = (defaultState) => {
  const [value, setValue] = useState(defaultState)

  const toggleState = () => setValue(a => !a)

  return { value, toggleState, setValue }
}

export default useToggle