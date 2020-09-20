import { connect } from 'react-redux'
// import { addbusiness} from '../redux/actions'
import Navigation from '../components/Navigation'

const mapStateToProps = (state) => {
  return { 
  //ex:props.businesses  //array
      loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(Navigation)