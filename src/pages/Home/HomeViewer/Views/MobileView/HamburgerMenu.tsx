import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { FontStyles } from './FontStyles';

const useStyles = makeStyles({
    list: {
        width: 250,
    }
});

export default function HamburgerMenu() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    type DrawerSide = 'top' | 'left' | 'bottom' | 'right';
    const toggleDrawer = (side: DrawerSide, open: boolean) => (
      event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = (side: DrawerSide) => (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
          <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
              ))}
          </List>
      </div>
    );



    return (
      <div>
          <MuiThemeProvider theme={FontStyles}>

              <Button onClick={toggleDrawer('right', true)}>
                  <MenuRoundedIcon> </MenuRoundedIcon>
              </Button>
              <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                  {sideList('right')}
              </Drawer>

          </MuiThemeProvider>

      </div>
    );
}