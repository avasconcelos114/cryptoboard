import { connect } from 'react-redux';
import Root from './root';
import selector from '../../selectors';

function mapStateToProps(state) {
    const theme = selector.getTheme(state);
    return {
        theme,
    };
}

export default connect(
    mapStateToProps,
    null,
)(Root);
