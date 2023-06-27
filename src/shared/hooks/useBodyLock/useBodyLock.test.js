import useBodyLock from './ui'
import React from 'react'

import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'


describe('useBodyLock', () => {

  beforeAll(() => {
    jest.mock('body-scroll-lock', () => {
      const originalModule = jest.requireActual('body-scroll-lock');

      //Mock the default export and named export 'foo'
      return {
        __esModule: true,
        ...originalModule,
        enableBodyScroll : jest.fn(() => 'mocked baz'),
      };
    });
  })

  test('Дефолтное значение', () => {
    const bodyLock = useBodyLock('ref', true)
    bodyLock()
    expect(enableBodyScroll()).toBe('mocked baz');
  })

})
