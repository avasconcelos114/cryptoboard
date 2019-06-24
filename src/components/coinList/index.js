import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import CoinList from './coinList';
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

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);