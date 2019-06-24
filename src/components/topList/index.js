import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TopList from './topList';
import selector from '../../selectors';

function mapStateToProps(state) {
    const theme = selector.getTheme(state)
    return {
        theme,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopList);