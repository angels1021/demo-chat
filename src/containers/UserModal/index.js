import { connect } from 'react-redux';
import { createUser } from '../../api/user/actions';
import UserForm from '../../components/UserForm';

const mapStateToProps = (state, ownProps) => ({
  open: !(state.user.id)
});

const mapDispatchToprops = (dispatch) => ({
  onSubmit: (name) => dispatch(createUser(name))
});

const UserModal = connect(mapStateToProps, mapDispatchToprops)(UserForm);

export default UserModal;
