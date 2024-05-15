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
  const [password, setPassword] = useState('')
  const [passwordGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(false)
  const [uppercase, setupperCase] = useState(false)
  const [symbol, setNumbers] = useState(false)
  const [numbers, setSymbols] = useState(false)


  const generatePasswordString = (passwordLength:number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if(uppercase){
      characterList += upperCaseChars
    }
    if (lowerCase) {
      characterList += lowerCaseChars
    }
    if (numbers) {
      characterList += digitChars
    }
    if (symbol) {
      characterList += specialChars
    }
    setPassword(createPassword(characterList, passwordLength))
    setIsPassGenerated(true)
  }

  const createPassword = (char:String, passwordLength: number) => {
    let result='';
    for(let i=0; i<passwordLength;i++){
        const charaterIndex = Math.round(Math.random() * char.length)
       result += char.charAt(charaterIndex)
    }
    return result
  }

  const resetPassword = () => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setupperCase(false)
    setNumbers(false)
    setSymbols(false)
  }

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App 