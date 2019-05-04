import React, { Component } from 'react'
import { Container, Card, CardBody, Row, Col } from 'reactstrap'

import Command from './command-button'
import Gantt from './gantt'
export default class extends Component {
  render() {
    return (
      <Container className='mt-2'>
        <Card>
          <CardBody>
            <Row className='mb-3'>
              <Col className='col-sm-5'>
                <strong>DHTMLX Gatt React</strong>
              </Col>
              <Col>
                <Command />
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
