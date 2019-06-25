import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import selector from '../../selectors';
import {toggleTheme} from '../../actions/common';
import Sidebar from './sidebar';

function mapStateToProps(state) {
    const theme = selector.getTheme(state)
    return {
        theme,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            toggleTheme,
        }, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);