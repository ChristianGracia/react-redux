import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinArr: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/all")
      .then(response => response.json())
      .then(jsonData => {
        // console.log(jsonData);
        this.setState({ coinArr: jsonData });
        console.log(this.state.coinArr);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return <div></div>;
  }
}

export default Test;
