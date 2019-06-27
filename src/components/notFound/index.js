import { connect } from 'react-redux';
import NotFound from './notFound';
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
)(NotFound);
