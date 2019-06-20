import {connect} from 'react-redux';

import Sidebar from './sidebar';
import selector from '../../selectors';

function mapStateToProps(state) {
    const theme = selector.getTheme(state)
    return {
        theme,
    };
}

export default connect(mapStateToProps)(Sidebar);