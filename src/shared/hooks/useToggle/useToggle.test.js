import useToggle from './ui'
import React from 'react'

describe('useToggle', () => {
  beforeEach(() => {
    const setState = jest.fn()
    const useStateSpy = jest.spyOn(React, 'useState')

    useStateSpy.mockImplementation((initialState) => [initialState, setState])
  })

  test('Дефолтное значение', () => {
    const [value, toggleValue, setValue] = useToggle(false)

    expect(value).toBe(false)
  })

  test('Кол-во вызовов set', () => {
    const [value, toggleValue, setValue] = useToggle(false)

    toggleValue()
    expect(setValue).toBeCalledTimes(1)
  })

})

