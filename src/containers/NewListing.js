import { connect } from 'react-redux'
//import { addbusiness} from '../redux/actions'
import NewListing from '../components/NewListing'

const mapStateToProps = (state) => {
  return { 
  //ex:props.businesses  //array
      businesses: state.businesses
  }
}

export default connect(mapStateToProps)(NewListing)