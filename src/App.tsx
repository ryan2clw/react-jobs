import React from 'react';
import LeadPage from './components/LeadPage';
import {
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <LeadPage/>
    </MuiThemeProvider>
  );
}

export default App;
