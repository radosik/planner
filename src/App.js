import React from 'react';
import MenuAppBar from './modules/header/header';
import SimpleTooltips from './modules/addRemove/addremove';
import NestedGrid from './modules/forms/form';
import Calendar from 'react-calendar';
import Container from '@material-ui/core/Container';
import Checkboxes from  './modules/checkBoxes/checkboxes';


const calenStyle = {
  position: 'absolute',
  left: '800px',
  top: '100px',
};

const addrStyle = {
  position: 'absolute',
  bottom: '0px',
  left: '0px',
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuAppBar />
      </header>
      <div >
        <Container size='xs' >
          <NestedGrid />
          <div style={calenStyle}>
            <Calendar locale={"en-EN"} />
          </div>
          <Checkboxes />
          <div style={addrStyle}>
          <SimpleTooltips />    
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
