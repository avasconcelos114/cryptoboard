import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dashboard from './dashboard';
import selector from '../../selectors';
import {
    fetchOptions,
    fetchCoinInfo,
    fetchValueTimechartData,
    fetchVolumeTimechartData,
} from '../../actions/dashboard';

function mapStateToProps(state) {
    const theme = selector.getTheme(state);
    const options = selector.getOptions(state);
    const coinInfo = selector.getCoinInfo(state);
    const selectedOption = selector.getSelectedOption(state);
    const valueTimechart = selector.getValueTimechart(state);
    const volumeTimechart = selector.getVolumeTimechart(state);

    return {
        theme,
        options,
        coinInfo,
        selectedOption,
        valueTimechart,
        volumeTimechart,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                fetchOptions,
                fetchCoinInfo,
                fetchValueTimechartData,
                fetchVolumeTimechartData,
            },
            dispatch,
        ),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);
