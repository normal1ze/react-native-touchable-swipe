/**
* @providesModule TouchableSwipe
**/

import React, { Component } from 'react';
import { PanResponder, View } from 'react-native';

export default class TouchableSwipe extends Component {
    constructor(props) {
      super(props);

      this.direction = 'tap'
      this._panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderRelease: (evt, gestureState) => {
          let tapThreshold = this.props.config.tapThreshold
          let x = gestureState.dx
          let y = gestureState.dy

          if (x < 0 - tapThreshold) {
            this.direction = 'left'
          }
          if (x > 0 + tapThreshold) {
            this.direction = 'right'
          }
          if (y < 0 - tapThreshold) {
            this.direction = 'up'
          }
          if (y > 0 + tapThreshold) {
            this.direction = 'down'
          }
          this._handleEvent()
        }
      });
    }

    _handleEvent(){
      switch(this.direction) {
        case 'tap':
          if(this.props.onPress){ this.props.onPress() }
          break;
        case 'left':
          if(this.props.onSwipeLeft){ this.props.onSwipeLeft() }
          break;
        case 'right':
          if(this.props.onSwipeRight){ this.props.onSwipeRight() }
          break;
        case 'up':
          if(this.props.onSwipeUp){ this.props.onSwipeUp() }
          break;
        case 'down':
          if(this.props.onSwipeDown){ this.props.onSwipeDown() }
          break;
      }
    }

    render() {
      return <View {...this.props} {...this._panResponder.panHandlers}>{this.props.children}</View>;
    }
}

TouchableSwipe.defaultProps = {
  config: { tapThreshold: 5 }
};
