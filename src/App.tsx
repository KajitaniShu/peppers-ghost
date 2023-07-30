import React, {useState} from 'react';
import './App.css';
import { ActionGame } from "./Component/ActionGame"
import { Aquarium } from "./Component/Aquarium"
import { Insect } from "./Component/Insect"
import { Notification } from '@mantine/core';
import {  Button } from '@mantine/core';
import { useDisclosure, useToggle } from '@mantine/hooks';


function App() {
  const [opened, handlers] = useDisclosure(false);
  const [message, setMessage] = useState({title: 'ゲームパッド接続済み', message: '', color: 'green'});
  const [gamePad, setGamePad] = useState<any>();
  const [page, toggle] = useToggle(['ActionGame', 'Aquarium', 'Insect']);

  window.addEventListener("gamepadconnected", (e) => {
    handlers.open();
    setMessage({title: 'ゲームパッド接続済み', message: String(window.navigator.getGamepads()[e.gamepad.index]), color: 'green'});
    setGamePad(e.gamepad.index);
    loop();
    setTimeout(()=>handlers.close(), 5000);
  });

  // ボタン押下監視用
  const loop = () => {
    const gamepads = navigator.getGamepads()[0];
    if(!gamepads) {
      return;
    }
    
    if (gamepads && gamepads?.buttons[9].pressed) toggle()
    requestAnimationFrame(loop);
  };


  return (
    <>
      {opened &&
        <Notification
          title={message.title}
          color={message.color}
          style={{
            position: 'absolute',
            bottom: 20,
            right: 30,
          }}
          onClose={() => handlers.close()}
        >
            {message.message}
        </Notification>
      }
      
      {page==="ActionGame"  && <ActionGame/>}
      {page==="Aquarium"    && <Aquarium/>}
      {page==="Insect"      && <Insect/>}
    </>
  );
}

export default App;
