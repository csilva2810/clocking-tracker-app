import React, { useState } from 'react';

import Switch from '../components/ui/Switch';

const container = {
  display: 'flex',
  flexDirection: 'collumn',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
};

/**
 * This components is meant to be used kind of like a story book
 * You can develop ui components in an isolated environment
 * @TODO We should configure storybook and remove this component when
 * we have the time to do it
 * */
const Canvas = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={container}>
      <Switch isOn={isOn} onClick={e => setIsOn(!isOn)} />
    </div>
  );
};

export default Canvas;
