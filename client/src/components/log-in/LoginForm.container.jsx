import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LogInForm from './LogInForm';
import WithSpinner from '../with-spinner.component';
import { compose } from 'redux';
import { selectIsLoading } from '../../redux/user/user.selectors';

const mapStateToProps = createStructuredSelector({
    loading: selectIsLoading
})

const LogInFormContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(LogInForm)

export default LogInFormContainer;