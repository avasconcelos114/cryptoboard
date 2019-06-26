import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dashboard from './dashboard';
import selector from '../../selectors';
import {
    fetchOptions,
    fetchCoinInfo,
    fetchTimechartData,
} from '../../actions/dashboard';

function mapStateToProps(state) {
    const theme = selector.getTheme(state);
    const options = selector.getOptions(state);
    const coinInfo = selector.getCoinInfo(state);
    const timechartData = selector.getTimechartData(state);
    const selectedOption = selector.getSelectedOption(state);

    return {
        theme,
        options,
        coinInfo,
        timechartData,
        selectedOption,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                fetchOptions,
                fetchCoinInfo,
                fetchTimechartData,
            },
            dispatch,
        ),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);
