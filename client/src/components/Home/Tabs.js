import React, { useState } from "react";
import "../../css/Tabs.css";
import "../../css/radio.css";
import "../../css/HoverButton.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

let data = [
  {
    name: "Flight",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?"
  },
  {
    name: "Hotel",
    text:
      "Lorem Tab001 dolor sit amet, consectetur adipisicing elit. Asperiores perspiciatis repellat soluta dolorum, quam quos possimus atque rerum porro voluptate beatae dolor incidunt! Corporis, tempore quasi fugit est. Ex, quae!Aliquam nulla explicabo facilis, consequuntur tenetur! Rem architecto veritatis quo corporis sapiente nesciunt culpa at enim similique officiis adipisci in commodi suscipit, natus facilis, repellat laboriosam eaque obcaecati quaerat vero!"
  },
  {
    name: "Guide",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus similique architecto sequi delectus non, nobis consequuntur officia, laboriosam reiciendis ea! Natus iste quas perspiciatis magnam repellat, voluptate excepturi esse."
  },
  {
    name: "Agent",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus similique architecto sequi delectus non, nobis consequuntur officia, laboriosam reiciendis ea! Natus iste quas perspiciatis magnam repellat, voluptate excepturi esse."
  }
];

const Tabs = () => {
  const [state, setState] = useState({
    activeTab: 0,
    data: data
  });

  const changeTabOnClick = index => {
    setState({
      ...state,
      activeTab: index
    });
  };

  return (
    <div className='tabs-body'>
      <TabHeader
        data={state.data}
        click={changeTabOnClick}
        activeId={state.activeTab}
      />
      <TabContent data={state.data} activeId={state.activeTab} />
    </div>
  );
};

const TabHeader = props => {
  const doClick = index => {
    props.click(index);
  };

  let activeClass = props.activeId;

  let tabs = props.data.map((item, index) => {
    return (
      <li className={activeClass === index ? "active" : ""}>
        <a onClick={() => doClick(index)}>
          <span>{item.name}</span>
        </a>
      </li>
    );
  });

  return <ul className='tabs-header mb-2'>{tabs}</ul>;
};

const TabContent = props => {
  let { activeId, data } = props;
  let activeClass = activeId;

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const ChangeFromDate = (value, e) => {
    setFromDate(value);
  };

  const ChangeToDate = date => {
    setToDate(date);
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date("2021/02/10"));

  let content = data.map((item, index) => {
    return (
      <div className={"tabs-textItem " + (activeClass === index ? "show" : "")}>
        {activeId === 0 && (
          <form class='needs-validation' novalidate>
            <div class='form-row'>
              <div class='col-lg-6 col-md-6 col-sm-12 mb-3'>
                <label for='validationCustomUsername'>From</label>
                <div class='input-group'>
                  <div class='input-group-prepend'>
                    <span class='input-group-text' id='inputGroupPrepend'>
                      <i className='fa fa-map-marker-alt'></i>
                    </span>
                  </div>
                  <input
                    type='text'
                    class='form-control'
                    id='validationCustomUsername'
                    placeholder=''
                    aria-describedby='inputGroupPrepend'
                    required
                  />
                </div>
              </div>
              <div class='col-lg-6 col-md-6 col-sm-12 '>
                <label for='validationCustom02'>to</label>
                <div class='input-group'>
                  <div class='input-group-prepend'>
                    <span class='input-group-text' id='inputGroupPrepend'>
                      <i className='fa fa-map-marker-alt'></i>
                    </span>
                  </div>
                  <input
                    type='text'
                    class='form-control'
                    id='validationCustom02'
                    placeholder=''
                    required
                  />
                </div>
              </div>
            </div>
            <div class='form-row'>
              <div>
                <label className='mr-5 col-sm-6 col-lg-6 col-md-6'>
                  <input
                    type='radio'
                    class='option-input radio '
                    name='example'
                    checked
                  />
                  Round-Trip
                </label>
                <label className='col-sm-6 col-lg-6 col-md-6'>
                  <input
                    type='radio'
                    class='option-input radio'
                    name='example'
                  />
                  One-Way
                </label>
              </div>
            </div>
            <div className='form-row mt-3'>
              <div className='col-lg-6 col-md-6 col-sm-12 mt-2'>
                <DatePicker
                  selected={fromDate}
                  onChange={(value, e) => ChangeFromDate(value, e)}
                />
              </div>

              <div className='col-lg-6 col-md-6 col-sm-12 mt-2'>
                <DatePicker
                  selected={fromDate}
                  onChange={(value, e) => ChangeFromDate(value, e)}
                  popperPlacement='top-start'
                  popperModifiers={{
                    offset: {
                      enabled: true,
                      offset: "-30px, 0px"
                    }
                  }}
                />
              </div>
            </div>
            <div className='form-row mt-2'>
              <button className='btn btn-primary'>Submit</button>
            </div>
          </form>
        )}
        {activeId === 1 && (
          <div className=''>
            <form class='needs-validation' novalidate>
              <div class='form-row'>
                <div class='col-lg-12 col-sm-12 col-md-12  '>
                  <label for=''>Staying in</label>
                  <div class='input-group'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text' id='inputGroupPrepend'>
                        <i className='fa fa-bed'></i>
                      </span>
                    </div>
                    <input
                      type='text'
                      class='form-control'
                      id='validationCustom02'
                      placeholder=''
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='form-row mt-5'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <button class='learn-more Hoverbutton'>
                    <span class='circle' aria-hidden='true'>
                      <span class='icon arrow'></span>
                    </span>
                    <span
                      class='button-text'
                      data-toggle='modal'
                      data-target='#OccupancyModal'
                    >
                      {" "}
                      1 Room, 2 Guests
                    </span>
                  </button>
                </div>
              </div>
              <div className='form-row mt-3'>
                <div className='col-lg-6 col-md-6 col-sm-12 mt-2'>
                  <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    popperPlacement='top-start'
                    popperModifiers={{
                      offset: {
                        enabled: true,
                        offset: "30px, 5px"
                      }
                    }}
                  />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 mt-2'>
                  <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    popperPlacement='top-start'
                    popperModifiers={{
                      offset: {
                        enabled: true,
                        offset: "20px, 5px"
                      }
                    }}
                  />
                </div>
              </div>
              <div className='form-row mt-2'>
                <button className='btn btn-primary'>Submit</button>
              </div>
            </form>
          </div>
        )}
        {activeId === 2 && (
          <div>
            <form class='needs-validation' novalidate>
              <div class='form-row'>
                <div class='col-12 mb-3'>
                  <label for='validationCustomUsername'>Location</label>
                  <div class='input-group'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text' id='inputGroupPrepend'>
                        <i className='fa fa-map-marker-alt'></i>
                      </span>
                    </div>
                    <input
                      type='text'
                      class='form-control'
                      id='validationCustomUsername'
                      placeholder=''
                      aria-describedby='inputGroupPrepend'
                      required
                    />
                  </div>
                </div>
              </div>
              <div class='form-row'>
                <div class='col-12 mb-3'>
                  <label for='validationCustomUsername'>Price</label>
                  <div class='input-group'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text' id='inputGroupPrepend'>
                        <i className='fa fa-dollar-sign'></i>
                      </span>
                    </div>
                    <input
                      type='text'
                      class='form-control'
                      id='validationCustomUsername'
                      placeholder=''
                      aria-describedby='inputGroupPrepend'
                      required
                    />
                  </div>
                </div>
              </div>
              <div class='form-row'>
                <div class='col-12 mb-3'>
                  <button className='btn btn-primary'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        )}
        {activeId === 3 && (
          <div>
            <form class='needs-validation' novalidate>
              <div class='form-row'>
                <div class='col-12 mb-3'>
                  <label for='validationCustomUsername'>Location</label>
                  <div class='input-group'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text' id='inputGroupPrepend'>
                        <i className='fa fa-map-marker-alt'></i>
                      </span>
                    </div>
                    <input
                      type='text'
                      class='form-control'
                      id='validationCustomUsername'
                      placeholder=''
                      aria-describedby='inputGroupPrepend'
                      required
                    />
                  </div>
                </div>
              </div>
              <div class='form-row'>
                <div class='col-12 mb-3'>
                  <label for='validationCustomUsername'>Price</label>
                  <div class='input-group'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text' id='inputGroupPrepend'>
                        <i className='fa fa-dollar-sign'></i>
                      </span>
                    </div>
                    <input
                      type='text'
                      class='form-control'
                      id='validationCustomUsername'
                      placeholder=''
                      aria-describedby='inputGroupPrepend'
                      required
                    />
                  </div>
                </div>
              </div>
              <div class='form-row'>
                <div class='col-12 mb-3'>
                  <button className='btn btn-primary'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  });

  return <div className='tabs-content'>{content}</div>;
};

export default Tabs;
