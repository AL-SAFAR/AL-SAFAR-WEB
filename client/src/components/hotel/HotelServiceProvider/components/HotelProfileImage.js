import React, { useState } from "react";
import $ from "jquery";
import jQuery from "jquery";
import "../../../../css/HotelProfileImages.scss";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { setHotelProfileImages } from "../../../../actions/HotelProfileAction";
const HotelProfileImage = ({ setHotelProfileImages }) => {
  //jQuery plugin
  (function($) {
    $.fn.uploader = function(options) {
      var settings = $.extend(
        {
          MessageAreaText: "No files selected.",
          MessageAreaTextWithFiles: "Upload Hotel Images:",
          DefaultErrorMessage: "Unable to open this file.",
          BadTypeErrorMessage: "",
          acceptedFileTypes: ["jpg", "jpeg", "png"]
        },
        options
      );

      var uploadId = 1;
      //update the messaging
      $(".file-uploader__message-area p").text(
        options.MessageAreaText || settings.MessageAreaText
      );

      //create and add the file list and the hidden input list
      var fileList = $('<ul class="file-list"></ul>');
      var hiddenInputs = $('<div class="hidden-inputs hidden"></div>');
      $(".file-uploader__message-area").after(fileList);
      $(".file-list").after(hiddenInputs);

      //when choosing a file, add the name to the list and copy the file input into the hidden inputs
      $(".file-chooser__input").on("change", function() {
        var file = $(".file-chooser__input").val();
        var fileName = file.match(/([^\\\/]+)$/)[0];

        //clear any error condition
        $(".file-chooser").removeClass("error");
        $(".error-message").remove();

        //validate the file
        var check = checkFile(fileName);
        if (check === "valid") {
          // move the 'real' one to hidden list
          $(".hidden-inputs").append($(".file-chooser__input"));

          //insert a clone after the hiddens (copy the event handlers too)
          $(".file-chooser").append(
            $(".file-chooser__input").clone({ withDataAndEvents: true })
          );

          //add the name and a remove button to the file-list
          $(".file-list").append(
            '<li style="display: none;"><span class="file-list__name">' +
              fileName +
              '</span><button class="removal-button" data-uploadid="' +
              uploadId +
              '"></button></li>'
          );
          $(".file-list")
            .find("li:last")
            .show(800);

          //removal button handler
          $(".removal-button").on("click", function(e) {
            e.preventDefault();

            //remove the corresponding hidden input
            $(
              '.hidden-inputs input[data-uploadid="' +
                $(this).data("uploadid") +
                '"]'
            ).remove();

            //remove the name from file-list that corresponds to the button clicked
            $(this)
              .parent()
              .hide("puff")
              .delay(10)
              .queue(function() {
                $(this).remove();
              });

            //if the list is now empty, change the text back
            if ($(".file-list li").length === 0) {
              $(".file-uploader__message-area").text(
                options.MessageAreaText || settings.MessageAreaText
              );
            }
          });

          //so the event handler works on the new "real" one
          $(".hidden-inputs .file-chooser__input")
            .removeClass("file-chooser__input")
            .attr("data-uploadId", uploadId);

          //update the message area
          $(".file-uploader__message-area").text(
            options.MessageAreaTextWithFiles ||
              settings.MessageAreaTextWithFiles
          );

          uploadId++;
        } else {
          //indicate that the file is not ok
          // $(".file-chooser").addClass("error");
          var errorText =
            options.DefaultErrorMessage || settings.DefaultErrorMessage;

          if (check === "badFileName") {
            errorText =
              options.BadTypeErrorMessage || settings.BadTypeErrorMessage;
          }
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "File Type not Allowed !",
            footer: "<h5>Only JPG JPEG PNG is allowed</h5>"
          });
        }
      });

      var checkFile = function(fileName) {
        var accepted = "invalid",
          acceptedFileTypes = acceptedFileTypes || settings.acceptedFileTypes,
          regex;

        for (var i = 0; i < acceptedFileTypes.length; i++) {
          regex = new RegExp("\\." + acceptedFileTypes[i] + "$", "i");

          if (regex.test(fileName)) {
            accepted = "valid";
            break;
          } else {
            accepted = "badFileName";
          }
        }

        return accepted;
      };
    };
  })(jQuery);

  //init
  $(document).ready(function() {
    $(".fileUploader").uploader({
      MessageAreaText: "Please Upload Hotel Images."
    });
  });

  const [uploadText, setuploadText] = useState("Upload");

  const onFileUpload = e => {
    let filesList = document.getElementsByClassName("custom-file-input");
    let FilesToUpload = [];
    for (var i = 0; i < filesList.length - 1; i++) {
      FilesToUpload.push(filesList[i].files[0]);
    }
    console.log(FilesToUpload);
    if (FilesToUpload.length > 10) {
      Swal.fire({
        icon: "info",
        title: "Oops...",
        text: "Maximum Upload Limit is 10",
        footer: "<h5>Please Remove some Images</h5>"
      });
      return;
    }

    // Action Call
    console.log(FilesToUpload);
    setHotelProfileImages(FilesToUpload);

    var element = document.getElementById("UploadButton");
    element.classList.add("bg-success");

    setuploadText("Update Files");

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      }
    });

    Toast.fire({
      icon: "success",
      title: "Images Uploaded Successfully"
    });
  };

  return (
    <div>
      <form class='file-uploader' enctype='multipart/form-data'>
        <div class='file-uploader__message-area'>
          <p>Select a file to upload</p>
        </div>
        <div className='container'>
          <div class='custom-file file-chooser pb-5 mb-1 '>
            <input
              class='file-chooser__input custom-file-input '
              type='file'
              id='customFile'
            />
            <label class='custom-file-label' id='uploadText' for='customFile'>
              Upload
            </label>
          </div>
        </div>
        <input
          className='file-uploader__submit-button'
          type='button'
          value={uploadText}
          id='UploadButton'
          onClick={onFileUpload}
        />
      </form>
    </div>
  );
};

export default connect(null, { setHotelProfileImages })(HotelProfileImage);
