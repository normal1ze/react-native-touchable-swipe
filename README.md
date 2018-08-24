Much like React Native's [TouchableWithoutFeedback](https://facebook.github.io/react-native/docs/touchablewithoutfeedback) this component allows touch events with combined swipe events.

It surrounds a View that receives events from React Native's [PanResponder](https://facebook.github.io/react-native/docs/panresponder).

Make no mistake, there is no magic, this is simply a nimble, javascript only response to having multiple touch events on the same component using what we already know from the PanResponder documentation.

### Installation

`npm install react-native-touchable-swipe --save`

### Usage

    import TouchableSwipe from 'react-native-touchable-swipe'

    <TouchableSwipe
      onPress={() => alert('You Pressed')}
      onSwipeLeft={() => alert('You Swiped Left')}
      onSwipeRight={() => alert('You Swiped Right')}
      onSwipeUp={() => alert('You Swiped Up')}
      onSwipeDown={() => alert('You Swiped Down')}>

      <View>
        <Text>This is my touchable element</Text>
      </View>

    </TouchableSwipe>

### Config

You can also pass in a `config` prop that can help tune the TouchableSwipe component.

    <TouchableSwipe config={{tapThreshold: 10}}></TouchableSwipe>

| Name | Default | Description |
| ---- | ------- | ----------- |
| tapThreshold | 5 | The distance of movement that is considered a tap. Outside of this movement the gesture becomes a slide |


### View props

TouchableSwipe takes the same props as a normal React Native View component.
