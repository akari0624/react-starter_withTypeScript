import React from 'react'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import MainPage, { helloText } from '../../../src/mainpage'
import { renderReduxConnectedHOC } from '../../test_helper'

afterEach(cleanup)

describe('can render MainPage', () => {
  const containerOfMainPage = renderReduxConnectedHOC(MainPage, {}, {})
  test('has specified init text', () => {
    const htnlElement = containerOfMainPage.getByText(helloText)
    expect(htnlElement.textContent).toBe(helloText)
  })
})
