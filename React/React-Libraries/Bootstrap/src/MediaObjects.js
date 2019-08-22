import React, { Component } from "react";
import { Media } from "react-bootstrap";

export default class Test extends Component {
  render() {
    return (
      <div style={{ padding: 10 }}>
        <Media>
          <div style={{ paddingLeft: 20 }}>
            <img
              width={270}
              height={200}
              className="mr-3"
              src="https://www.crockerriverside.org/sites/main/files/imagecache/carousel/main-images/camera_lense_0.jpeg"
              alt="Generic placeholder"
            />
          </div>
          <Media.Body>
            <h5>Media Heading</h5>
            <p style={{ paddingLeft: 20 }}>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>

            <Media>
              <img
                width={270}
                height={200}
                className="mr-3"
                src="https://www.crockerriverside.org/sites/main/files/imagecache/carousel/main-images/camera_lense_0.jpeg"
                alt="Generic placeholder"
              />
              <div style={{ paddingLeft: 20 }}>
                <Media.Body>
                  <h5>Media Heading</h5>
                  <p style={{ paddingLeft: 20 }}>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                  </p>
                </Media.Body>
              </div>
            </Media>
          </Media.Body>
        </Media>
      </div>
    );
  }
}
