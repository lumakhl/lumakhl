import React from 'react';

import MenuItems from 'components/menu';
import MouthView from 'components/mouthArea';
import Inventory from 'components/inventory';
import ToothState from 'context/tooth/ToothState';
import StartScreen from 'components/start-screen';
import Audio from 'commons/Audio'

export default class GameScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      start: false
    }
  }

  startGame() {
    this.setState({ start: true });
  }

  render() {
    return (
    <div>
      {
        !this.state.start ?
        (
          <StartScreen
            onStart={() => this.startGame()}>
          </StartScreen>
        ) :
        (
          <div>
            <ToothState>
              <div className="container">
                <MouthView />
                <Inventory />
                <MenuItems />
              </div>
            </ToothState>
            <Audio></Audio>
          </div>
        )
      }
    </div>
    )
  }

}