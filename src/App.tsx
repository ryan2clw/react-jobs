import React from 'react';
import LeadPage from './components/LeadPage';
import {
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
// import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: purple[500],
  //   },
  //   secondary: {
  //     main: '#03DAC5',
  //   }
  // }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <LeadPage/>
    </MuiThemeProvider>
  );
}

export default App;
