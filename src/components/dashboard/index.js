import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Dashboard from './dashboard';
import selector from '../../selectors';
import {
    fetchOptions,
    fetchDailyAverage,
    fetchTimechartData,
    fetchExchangeVolume,
} from '../../actions/dashboard';

function mapStateToProps(state) {
    const theme = selector.getTheme(state)
    const options = selector.getOptions(state)
    const dailyAverage = selector.getDailyAverage(state)
    const timechartData = selector.getTimechartData(state)
    const exchangeVolume = selector.getExchangeVolume(state)

    return {
        theme,
        options,
        dailyAverage,
        timechartData,
        exchangeVolume,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            fetchOptions,
            fetchDailyAverage,
            fetchTimechartData,
            fetchExchangeVolume,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);