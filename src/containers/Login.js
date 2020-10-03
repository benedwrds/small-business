import { connect } from 'react-redux'
 import { loggedIn } from '../redux/actions'
import Login from '../components/Login'

const mapDispatchToProps = dispatch => {
  return { 
  //ex:props.businesses  //array
      loggedIn: () => dispatch(loggedIn()),
      // loggedOut:() => dispatch(loggedOut())
  }
}

export default connect(null, mapDispatchToProps)(Login)