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
//listing and details container must be different 
//state for listing is working fine but not for details
//look into redux dev tools