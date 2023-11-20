import React from 'react';

import { styles } from '../object-style/style';
import StyledButton from './Button/button';

const StyledComponents = () => {
  return (
    <div>
        <div style={styles.Container}>
            <h2 style={styles.Header}>6) STYLED COMPONENTS</h2>
        </div>
        {/* <button>STYLED BUTTON-1</button> */}
        <StyledButton>STYLED DEFAULT BUTTON</StyledButton>
        <StyledButton variant='outline'>STYLED PROPERTY BUTTON</StyledButton>
    </div>
  )
}

export default StyledComponents;
