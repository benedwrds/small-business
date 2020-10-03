import { connect } from 'react-redux'
// import { addbusiness} from '../redux/actions'
import Listing from '../components/Listing'

const mapStateToProps = (state) => {
  return { 
  //ex:props.businesses  //array
      businesses: state.businesses,
      loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(Listing)
