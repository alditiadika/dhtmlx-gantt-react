import React, { Component } from 'react'
import { Container, Card, CardBody, Row, Col } from 'reactstrap'
import ModalForm from './gantt/modal'
import Command from './command-button'
import Gantt from './gantt'
export default class extends Component {
  state = {
    isOpen: false
  }
  toggleModal = status => this.setState({ isOpen: status })
  render() {
    return (
      <Container className='mt-2'>
        {this.state.isOpen && <ModalForm toogleModal={this.toggleModal} />}
        <Card>
          <CardBody>
            <Row className='mb-3'>
              <Col className='col-sm-5'>
                <strong>DHTMLX Gatt React</strong>
              </Col>
              <Col>
                <Command toogleModal={this.toggleModal} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Gantt />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    )
  }
}
