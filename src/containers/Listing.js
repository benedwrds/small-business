import { connect } from 'react-redux'
// import { addbusiness} from '../redux/actions'
import Listing from '../components/Listing'

const mapStateToProps = (state) => {
  return { 
  //ex:props.businesses  //array
      businesses: state.businesses
  }
}

export default connect(mapStatetoProps)(Listing)