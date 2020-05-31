import React, { Fragment, Component, useState, useEffect } from "react";
import "../../../../css/HotelProfileForm.css";
import "../../../../css/HotelProfileFormRadio.css";
import "../../../../css/GuideProfileForm.css";
import createReactClass from "create-react-class";
import ReactDOM from "react-dom";
import $ from "jquery";
import { connect } from "react-redux";
import {
  setGuideProfile,
  removePlaceName,
  addGuideProfile
} from "../../../../actions/GuideProfileAction";
const GuideProfileForm = ({
  GuideProfile: {
    address,
    city,
    charges,
    description,
    placenames,
    PlaceImages
  },
  setGuideProfile,
  removePlaceName,
  addGuideProfile
}) => {
  let placeNameCounter = 0;
  const [ImagePreview, setImagePreview] = useState("");

  const onImageChange = e => {
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    onChange(e);
  };
  const onSubmit = () => {
    let guideprofile = {
      address,
      city,
      charges,
      description,
      placenames,
      PlaceImages
    };
    addGuideProfile(guideprofile);
  };
  class NewPlace extends Component {
    constructor(props) {
      super(props);
      this.state = { ["customFile" + this.props.id]: "" };
      this.ImageChange = this.ImageChange.bind(this);
    }
    ImageChange = e => {
      this.setState({
        ["customFile" + this.props.id]: URL.createObjectURL(e.target.files[0])
      });
      onChange(e);
    };
    render() {
      return (
        <Fragment>
          <div className='guideplaceName'>
            <div className='row pt-2'>
              <div className='col-lg-9'>
                <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='form-group'>
                      <label htmlFor={"placename" + this.props.id}>
                        Place Name:{" "}
                      </label>
                      <input
                        type='text'
                        id={"placename" + this.props.id}
                        name={"placename" + this.props.id}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6 pt-3'>
                    <div className='form-group'>
                      <button
                        className='btn btn-danger'
                        type='button'
                        onClick={DeletePlace}
                      >
                        Delete <i className='fa fa-trash'></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='row pt-2'>
                  <div
                    className='col-lg-12 col-md-12 pt-2'
                    id={`placeFilePicker${placeNameCounter}`}
                  >
                    <div>
                      <div class='custom-file'>
                        <input
                          type='file'
                          className='custom-file-input'
                          name={"customFile" + this.props.id}
                          id={"customFile" + this.props.id}
                          onChange={e => this.ImageChange(e)}
                        />
                        <label class='custom-file-label' for='customFile'>
                          Choose file
                        </label>
                      </div>
                    </div>
                  </div>
                  <div id={`re-renderplace${placeNameCounter}`}></div>
                </div>
              </div>
              <div className='col-lg-3'>
                <img
                  className='GuidePlaceImage'
                  src={this.state[["customFile" + this.props.id]]}
                  style={{ height: "150px", width: "150px" }}
                />
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
  }

  const DeletePlace = async e => {
    e.preventDefault();
    let ItemToSetIndex = placeNameCounter - 1;
    console.log(ItemToSetIndex);
    console.clear();
    console.log("PlaceNameCounter=" + placeNameCounter);
    removePlaceName({
      index: placeNameCounter
    });
    await ReactDOM.unmountComponentAtNode(
      document.getElementById("PlaceNameID" + placeNameCounter)
    );
    await document.getElementById("PlaceNameID" + placeNameCounter).remove();
    --placeNameCounter;
  };

  const AddNewPlace = async e => {
    e.preventDefault();
    ++placeNameCounter;
    let AddBtnDelete = placeNameCounter - 1;

    var newDiv = document.createElement("div");
    newDiv.id = "PlaceNameID" + placeNameCounter;
    newDiv.className = "guidePlaceName";
    var currentDiv = document.getElementById("div1");
    document.getElementById("guideContainer").insertBefore(newDiv, currentDiv);

    await ReactDOM.render(
      <NewPlace id={placeNameCounter} />,
      document.getElementById("PlaceNameID" + placeNameCounter)
    );
  };

  const onChange = e => {
    setGuideProfile({
      name: e.target.name,
      value: e.target.value,
      type: e.target.type,
      ...(e.target.files && { file: e.target.files[0] })
    });
  };

  return (
    <Fragment>
      <div id='guideForm' className='form mt-3' style={{ width: "100%" }}>
        <div className='form-toggle'></div>
        <div className='form-panel one guideformpanel'>
          <div className='form-header'>
            <h1>Set Up Guide Profile</h1>
          </div>
          <form enctype='multipart/form-data' className='form-content'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 colguideform'>
                <div className='form-group'>
                  <label htmlFor='address'>Address: </label>
                  <input
                    type='text'
                    id='address'
                    name='address'
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-12 colguideform'>
                <div className='form-group  '>
                  <label htmlFor='city'>City: </label>
                  <input
                    type='text'
                    id='city'
                    name='city'
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-12 colguideform'>
                <div className='form-group'>
                  <label htmlFor='charges'>Service Charges: </label>
                  <input
                    type='number'
                    min='1'
                    id='charges'
                    name='charges'
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12 colguideform'>
                <div className='form-group pt-2'>
                  <label htmlFor='description'>Description: </label>
                  <div
                    className='form-group'
                    style={{
                      maxWidth: "100%",
                      border: "1px solid #0099FF"
                    }}
                  >
                    <textarea
                      id='description'
                      name='description'
                      rows='4'
                      cols='90'
                      style={{ resize: "none" }}
                      onChange={onChange}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div id='guideContainer'>
              <div className='guideplaceName' id='PlaceNameID0'>
                <div className='row pt-2'>
                  <div className='col-lg-9'>
                    <div className='row'>
                      <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='form-group'>
                          <label htmlFor='placename0'>Place Name: </label>
                          <input
                            type='text'
                            id='placename0'
                            name='placename0'
                            onChange={onChange}
                          />
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6 pt-3'>
                        <div className='form-group'>
                          <button
                            className='btn btn-danger'
                            type='button'
                            onClick={DeletePlace}
                          >
                            Delete <i className='fa fa-trash'></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='row pt-2'>
                      <div
                        id='placeFilePicker0'
                        className='col-lg-12 col-md-12 pt-2'
                      >
                        <div>
                          <div class='custom-file'>
                            <input
                              type='file'
                              className='custom-file-input '
                              id='customFile0'
                              name='customFile0'
                              onChange={e => onImageChange(e)}
                            />
                            <label class='custom-file-label' for='customFile'>
                              Choose file
                            </label>
                          </div>
                        </div>
                      </div>

                      <div id='re-renderplace0'></div>
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <img
                      className='GuidePlaceImage'
                      src={ImagePreview}
                      style={{ height: "150px", width: "150px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-4 col-md-6 col-sm-12 ' id='guidePlaceAdd'>
                <div className='form-group'>
                  <button
                    className='btn btn-success'
                    onClick={AddNewPlace}
                    type='button'
                  >
                    Add Place{" "}
                    <i className='fa fa-plus' style={{ marginTop: "0px" }}></i>
                  </button>
                </div>
              </div>
            </div>
            <div className='row pt-3'>
              <div className='col-lg-3'></div>
              <div className='col-lg-6'>
                <button
                  className='btn btn-primary CreateProfileBtn'
                  style={{ width: "100%" }}
                  type='button'
                  onClick={onSubmit}
                >
                  <i className='fa fa-check'></i> Create Profile
                </button>
              </div>
              <div className='col-lg-3'></div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

const MapStateToProps = state => ({
  GuideProfile: state.GuideProfile
});

export default connect(MapStateToProps, {
  setGuideProfile,
  removePlaceName,
  addGuideProfile
})(GuideProfileForm);
