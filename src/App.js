import React from 'react';
import {Provider} from 'react-redux';
import {createMuiTheme} from '@material-ui/core/styles';
import {green} from '@material-ui/core/colors/';
import {ThemeProvider} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import store from './store';
import RestaurantScreen from './components/RestaurantScreen';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const App = () => (
  <div>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
          <ToolBar>
            <Typography variant="h6">Opinion Ate</Typography>
          </ToolBar>
        </AppBar>
        <Container>
          <RestaurantScreen />
        </Container>
      </ThemeProvider>
    </Provider>
  </div>
);

export default App;
