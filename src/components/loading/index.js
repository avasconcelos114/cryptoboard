import { connect } from 'react-redux';

import Loading from './loading';
import selector from '../../selectors';

function mapStateToProps(state) {
    const isLoading = selector.getLoadingState(state);
    const theme = selector.getTheme(state);
    return {
        isLoading,
        theme,
    };
}

export default connect(mapStateToProps)(Loading);
