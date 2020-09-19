import { connect } from 'react-redux'
// import { addbusiness} from '../redux/actions'
import Details from '../components/Details'

const mapStateToProps = (state) => {
  return { 
  //ex:props.businesses  //array
      businesses: state.businesses
  }
}

export default connect(mapStateToProps)(Details)