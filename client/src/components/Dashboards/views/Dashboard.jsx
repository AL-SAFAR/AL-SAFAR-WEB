import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "../variables/charts.jsx";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className='content'>
          <Row>
            <Col lg='3' md='6' sm='6'>
              <Card className='card-stats'>
                <CardBody>
                  <Row>
                    <Col md='4' xs='5'>
                      <div className='icon-big text-center icon-warning'>
                        <i className='nc-icon nc-calendar-60 text-warning' />
                      </div>
                    </Col>
                    <Col md='8' xs='7'>
                      <div className='numbers'>
                        <p className='card-category'>Total Bookings</p>
                        <CardTitle tag='p'>10</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className='stats'>
                    <i className='fas fa-check' /> Bookigs till now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg='3' md='6' sm='6'>
              <Card className='card-stats'>
                <CardBody>
                  <Row>
                    <Col md='4' xs='5'>
                      <div className='icon-big text-center icon-warning'>
                        <i className='nc-icon nc-money-coins text-success' />
                      </div>
                    </Col>
                    <Col md='8' xs='7'>
                      <div className='numbers'>
                        <p className='card-category'>Revenue</p>
                        <CardTitle tag='p' style={{ fontSize: "20px" }}>
                          Rs.10,345
                        </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className='stats'>
                    <i className='far fa-calendar' /> Viewed Monthly
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg='3' md='6' sm='6'>
              <Card className='card-stats'>
                <CardBody>
                  <Row>
                    <Col md='4' xs='5'>
                      <div className='icon-big text-center icon-warning'>
                        <i className='nc-icon nc-shop text-danger' />
                      </div>
                    </Col>
                    <Col md='8' xs='7'>
                      <div className='numbers'>
                        <p className='card-category'>Vacant Rooms</p>
                        <CardTitle tag='p'>23</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className='stats'>
                    <i className='far fa-clock' /> Till Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg='3' md='6' sm='6'>
              <Card className='card-stats'>
                <CardBody>
                  <Row>
                    <Col md='4' xs='5'>
                      <div className='icon-big text-center icon-warning'>
                        <i className='nc-icon nc-check-2 text-primary' />
                      </div>
                    </Col>
                    <Col md='8' xs='7'>
                      <div className='numbers'>
                        <p
                          className='card-category'
                          style={{ fontSize: "14px" }}
                        >
                          Current Booking
                        </p>
                        <CardTitle tag='p'>40</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className='stats'>
                    <i className='fas fa-sync-alt' /> Update now
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md='12'>
              <Card>
                <CardHeader>
                  <CardTitle tag='h5'>Revenue</CardTitle>
                  <p className='card-category'>By year</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className='stats'>
                    <i className='fa fa-history' /> Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md='4'>
              <Card>
                <CardHeader>
                  <CardTitle tag='h5'>Reviews</CardTitle>
                  <p className='card-category'>By Month</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className='legend'>
                    <i className='fa fa-circle text-primary' /> 5 Stars{" "}
                    <i className='fa fa-circle text-warning' /> 4 Stars{" "}
                    <i className='fa fa-circle text-danger' /> 3 Stars{" "}
                    <i className='fa fa-circle text-gray' /> 2 Stars{" "}
                    <i className='fa fa-circle text-success' /> 1 Star{" "}
                  </div>
                  <hr />
                  <div className='stats'>
                    <i className='fa fa-calendar' /> Number of emails sent
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md='8'>
              <Card className='card-chart'>
                <CardHeader>
                  <CardTitle tag='h5'>Bookings</CardTitle>
                  <p className='card-category'>By Month</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardNASDAQChart.data}
                    options={dashboardNASDAQChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <div className='chart-legend'>
                    <i className='fa fa-circle text-info' /> Accepted Bookings{" "}
                    <i className='fa fa-circle text-warning' /> Total Bookings
                  </div>
                  <hr />
                  <div className='card-stats'>
                    <i className='fa fa-check' /> Data information certified
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
