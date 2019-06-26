import { connect } from 'react-redux';

import Header from './header';
import selector from '../../selectors';

function mapStateToProps(state) {
    const theme = selector.getTheme(state);
    return {
        theme,
    };
}

export default connect(mapStateToProps)(Header);
