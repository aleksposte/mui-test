import React from "react";
import App from "./App";
import Main from "./components/Main";

import { render, screen, getByText, container } from '@testing-library/react'
import '@testing-library/jest-dom'

test('render Main - title', async () => {
  render(<Main />)
  expect(screen.queryByText('Вмещаемость главного зала'))
})

test('render Main - items', async () => {
  render(<Main />)
  expect(screen.queryByText('кибер соревнования'))
})
