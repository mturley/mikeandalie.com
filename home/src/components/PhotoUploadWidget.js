import React from 'react';

class PhotoUploadWidget extends React.Component {
  componentDidMount() {
    window.uploadToken = '$2y$13$LijOzHf5WbzKf2lwg2haw.vHEvG8wUToNzDJEUeviIFCw4wvSzdkO';
    window.uploadSlot = 'gdwidget-upload-slot-07cdfd2337';
    // Change the below if you would like to have your own messages
    window.initTxt = "<img src='https://gdwidget.com/img/icon.svg' style='width:50px;'><br />Drag & Drop Your Files Here!";
    window.successTxt = "Your photo(s) were succesfully uploaded!<br />Thank you! <a href='/photos'>Upload More</a>";
    var d = document,
      b = d.getElementsByTagName('body')[0],
      js = d.createElement('script');
    js.type = 'text/javascript';
    js.async = true;
    js.src = '//gdwidget.com/widget/upload/render.js';
    b.appendChild(js);
  }

  render() {
    return (
      <div id="gdwidget-upload-slot-07cdfd2337"></div>
    );
  }
}

export default PhotoUploadWidget;