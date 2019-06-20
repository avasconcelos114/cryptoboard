import {connect} from 'react-redux';

import MenuList from './menuList';
import selector from '../../selectors';

function mapStateToProps(state) {
    const menus = selector.getMenuItems(state)
    const theme = selector.getTheme(state)
    return {
        menus,
        theme,
    };
}

export default connect(mapStateToProps)(MenuList);