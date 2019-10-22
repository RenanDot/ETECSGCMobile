import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/login';
import List from './pages/list';
import Confirm from './pages/confirm';
import Pratos from './pages/pratos';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login, 
        List,
        Confirm,
        Pratos
    })

);

export default Routes;