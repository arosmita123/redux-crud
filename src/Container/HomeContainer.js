import Home from '../Components/Home'
import {addData, deleteData, removeData} from '../redux/Action/action'
import {connect} from "react-redux"
const mapStateToProps = (state) => ({
    contacts: state,
  });
  const mapDispatchToProps = (dispatch) => ({
    addContact: (data) => {
      dispatch(addData(data));
    },
    deleteContact: (id) => {
      dispatch(deleteData(id));
    },
    removeContact: () => {
      dispatch(removeData());
    },
  });
export default connect(mapStateToProps,mapDispatchToProps) (Home);