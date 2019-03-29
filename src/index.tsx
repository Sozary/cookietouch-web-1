import App from '@/components/App'
import { initialize, presence, getinfo } from '@/FirebaseHelpers'
import registerServiceWorker from '@/registerServiceWorker'
import '@/tinker'
import * as React from 'react'
import { render } from 'react-dom'
import 'typeface-roboto'
import './index.css'

initialize()
presence()
getinfo()

render(<App />, document.getElementById('root') as HTMLElement)

registerServiceWorker()
