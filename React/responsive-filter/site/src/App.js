import React, { Component } from "react";
import RenderItems from "./RenderItems";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [
        "In mauris ex",
        "varius a sodales vitae",
        "varius in lectus.Integer",
        "pretium porttitor dui",
        "et posuere dolor ",
        "tincidunt sit amet.Nullam imperdiet ",
        "orci id tellus venenatis",
        " elementum.Sed dapibus mollis",
        "euismod.Phasellus venenatis venenatis magna",
        "non ultrices",
        "magna condimentum et.Aenean volutpat",
        "ante ut augue pharetra fermentum.Cras aliquam sed libero",
        "in tempus.Cras semper",
        "ante lectus",
        " sit amet varius velit ultrices eget.",
        " Duis dapibus enim vel pharetra laoreet.Mauris",
        " at vehicula enim.Nulla",
        "sed commodo orci.Nam ut tempus eros",
        "et varius quam.Aenean",
        "eget lacus a justo venenatis suscipit ",
        "sit amet facilisis odio.Maecenas",
        "congue ut lacus at",
        "mollis condimentum urna.Aliquam sagittis dictum ex tristique",
        "finibus, Phasellus a tellus eget erat molestie aliquam at at dolor.",
        "auctor convallis felis",
        "ac vulputate dolor pellentesque et.Praesent vehicula congue vehicula.Nullam sed pulvinar dui, tempor semper felis.Curabitur elementum tincidunt odio, vitae porta ante pharetra et.Suspendisse ultricies libero vitae lectus fringilla iaculis.Fusce venenatis, neque consectetur convallis consectetur, odio nisi dignissim metus, ac convallis enim velit id erat., , Nullam lorem lectus, vulputate in tincidunt a, feugiat nec velit.Maecenas venenatis tincidunt egestas.Aenean augue urna, tristique quis mollis vitae, maximus eget purus.Sed vel tempus sapien, ornare laoreet odio.Sed posuere blandit orci, et pulvinar felis convallis vel.Donec euismod risus sed justo vulputate, sit amet egestas ante faucibus.Pellentesque consequat, nisi vel condimentum pulvinar, nunc elit consequat libero, non facilisis dui ipsum consectetur quam.Duis dolor libero, fermentum id enim at, finibus maximus risus.Duis arcu elit, varius sed varius at, ultricies id justo.Aenean vulputate finibus dapibus.Aenean sagittis magna mi, quis accumsan sem semper vel.Nunc eget scelerisque lectus.Nunc accumsan porta risus, a dapibus turpis ultrices ut.Donec porttitor mattis velit, sed dapibus dui gravida ut.,  Sed sed lobortis nunc.Nunc blandit sed dolor laoreet ullamcorper.Morbi vel justo vel justo lobortis tristique a suscipit ipsum.Cras aliquam enim a nunc vehicula luctus eu at odio.Donec congue felis sed massa iaculis",
        "mollis malesuada eros tristique.Vestibulum nec nulla",
        "vitae ligula molestie tempus.Duis pharetra elit ac sem convallis lobortis ac sit"
      ],
      query: ""
    };
  }
  componentDidMount() {
    fetch("https://baconipsum.com/api/?type=meat-and-filler")
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  render() {
    const { people, query } = this.state;
    const filteredItems = people.filter(person =>
      person.toLowerCase().includes(query.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Hi</h1>
        <input
          type="search"
          onChange={e => {
            this.setState({ query: e.target.value });
          }}
          value={this.state.query}
        />

        <RenderItems query={filteredItems} />
      </div>
    );
  }
}
export default App;
