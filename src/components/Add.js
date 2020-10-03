import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'

class Add extends Component {
    state = {
        open: false,
        name: '',
        mpg: '',
        cylinders: '',
        horsepower: '',
    }

    // toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

     handleSubmit = (e) => {
         e.preventDefault()
         const payload = { ...this.state }
         payload.id = this.props.businessTotal + 1
         delete payload.open
         console.log("BUSINESS", payload)
         // add this.props.addCar function here
         this.props.addBusiness(payload)
         // also add this.setState to close the dialog
        //  this.setState({open: false})
  }
    

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                id: '',
                name: '',
                description: '',
                address: '',
                hours: ''
            })
        }
    }

    render() {
        return (
          
            <Fragment>
              {/* <div>
                 <div style={{ textAlign: 'center' }}> 
                 s
                    {/* <h1>Add Car:</h1> 
                    <Button
                        // variant="contained"
                        // className="add-car"
                         //onClick={this.toggleDialog}
                    >
                        Add Listing
                    </Button>
                    </div> */}
                <div>
                    {/* <Dialog open={this.state.open} onClose={this.toggleDialog} > */}
                        {/* <DialogTitle>Add New Car</DialogTitle> */}
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px', marginLeft: '3%', marginTop: '1%' }}>
                                <TextField 
                                    id="id" 
                                    placeholder="Id" 
                                    value={this.state.id} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="name" 
                                    placeholder="Name" 
                                    value={this.state.name} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="description" 
                                    placeholder="Description" 
                                    value={this.state.description} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="address" 
                                    placeholder="Address" 
                                    value={this.state.address} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="hours" 
                                    placeholder="Hours" 
                                    value={this.state.hours} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Add Listing</Button>
                            </form>
                        </DialogContent>
                    {/* </Dialog> */}
                </div>
            </Fragment>
        )
    }
}

export default Add