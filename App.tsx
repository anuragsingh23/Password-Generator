import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'
import * as Yup from 'yup'

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4,"Length should be atleast 4")
  .max(16,"we don't support length more than 16")
  .required("please provide length to begin with")
})

const App = () => {
  const [password, setPassowrd] = useState('')
  const [lowercase, Islowercase] = useState(false)
  const [uppercase, isUppercase] = useState(false)
  const [symbol, isSymbol] = useState(false)

  const generatePasswordString = (passwordLength:number) => {
    //
  }

  const createPassword = (char:String, passwordLength: number) => {}
  const resetPassword = () => {}

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App 