import { WebviewApp } from '@botonic/react'

import { locales } from '../locales'
import MyWebview from './components/myWebview'
import InteractionWithBot from './components/interactionWithBot'
import datePickers from './components/datePickers'
require("react-datepicker/dist/react-datepicker-cssmodules.css");

const webviews = [MyWebview, InteractionWithBot, datePickers]

export default new WebviewApp({ webviews, locales })
