import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import { mapStateToProps } from '../redux/root-reducer'

class ModalData extends Component {
  render() {
    return (
      <Modal isOpen={true}>
        <ModalHeader>Add Data</ModalHeader>
        <ModalBody />
        <ModalFooter className='text-right'>
          <Button
            outline={true}
            color='primary'
            onClick={() => this.props.toogleModal(false)}
          >
            Add
          </Button>
          <Button color='warning' onClick={() => this.props.toogleModal(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default connect(mapStateToProps)(ModalData)
