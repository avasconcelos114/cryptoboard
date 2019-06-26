import { connect } from 'react-redux';

import selector from '../../../selectors';
import CoinCard from './coinCard';

function mapStateToProps(state) {
    const theme = selector.getTheme(state);
    return {
        theme,
    };
}

export default connect(
    mapStateToProps,
    null,
)(CoinCard);
