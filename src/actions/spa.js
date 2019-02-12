import React from 'react'
import { Text, Button } from '@botonic/react'

export default class extends React.Component {
  static async botonicInit({ input, session, params, lastRoutePath }) {
  }

  render() {
    return (
      <>
        <Text>
        Hola =) Benvingut a Mediterrani SPA. Quin tractament vol reservar?
        </Text>
        <Button payload='massatge'>Massatge </Button>
        <Button payload='jacuzzi'>Jacuzzi</Button>
        <Button payload='exfoliant'>Exfoliant</Button>
      </>
    )
  }
}