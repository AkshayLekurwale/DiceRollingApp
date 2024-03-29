import { StyleSheet, Text, View,  ImageSourcePropType,Image ,Pressable} from 'react-native'
import type {PropsWithChildren} from 'react';
import React, {useState} from 'react';

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>


const Dice = ({imageUrl}: DiceProps):JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
    
      default:
        setDiceImage(DiceOne)
        break;
    }

  }

  return(
    <View style={styles.container}>
        <Dice imageUrl={diceImage} />
        <Pressable style={styles.buttoncss}onPress={rollDiceOnTap}>
        <Text
        style={styles.rollDiceBtnText}
        >
        Roll the dice
        </Text>
      </Pressable>
    </View>
  )  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
    marginVertical : 70
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#08528d',
    fontSize: 16,
    color: '#08528d',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  buttoncss:{
    borderRadius: 8,
    backgroundColor : '#91d9e5'
  }
});
export default App;