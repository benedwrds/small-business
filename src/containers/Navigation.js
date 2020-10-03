import { connect } from 'react-redux'
// import { addbusiness} from '../redux/actions'
import { loggedOut } from '../redux/actions'
import Navigation from '../components/Navigation'

const mapStateToProps = (state) => {
  return { 
  //ex:props.businesses  //array
      loggedIn: state.loggedIn
  }
}
const mapDispatchToProps = dispatch => {
  return { 
  //ex:props.businesses  //array
      loggedOut: () => dispatch(loggedOut()),
      // loggedOut:() => dispatch(loggedOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)