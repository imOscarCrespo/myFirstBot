import React from 'react'
import {
  Text,
  Element,
  Button,
} from '@botonic/react'
import datePickers from '../webviews/components/datePickers'

export default class extends React.Component {
  

  render() {
    return (
      <>
        <Text>
        Genial! L'exfoliant és sens dubte la millor opció ;)
        

        <Text>
        Quin dia vols reservar?
        </Text>
        <Element>
            <Button webview={datePickers}>
              Calendar
            </Button>
          </Element>
          </Text>

      </>
    )
  }
}
