import React from 'react'
import {
  Text,
  Carousel,
  Element,
  Pic,
  Button,
  Title,
  Subtitle
} from '@botonic/react'
import datePickers from '../webviews/components/datePickers'

export default class extends React.Component {

  render() {
    return (
      <>
        <Text>
        Genial! El massatge és sens dubte la millor opció ;)
        </Text>
        
        <Text>
        Quin dia vols reservar?
        </Text>
        <Element>
            <Button webview={datePickers} params={{ whatever: 'hi' }}>
              Calendar
            </Button>
          </Element>

      </>
    )
  }
}
