import {connect} from 'react-redux';

import News from './news';
import selector from '../../selectors';

function mapStateToProps(state) {
    const theme = selector.getTheme(state)
    return {
        theme,
    };
}

export default connect(mapStateToProps)(News);