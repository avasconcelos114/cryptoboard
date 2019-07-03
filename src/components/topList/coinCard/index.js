import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeOption } from '../../../actions/dashboard';
import selector from '../../../selectors';
import CoinCard from './coinCard';

function mapStateToProps(state) {
    const theme = selector.getTheme(state);
    return {
        theme,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                changeOption,
            },
            dispatch,
        ),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CoinCard);
