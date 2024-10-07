import React, { Component } from "react"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Joshua Chibueze",

        bio: "I am a full stack web developer with entrepreneurship qualities and experiences. Co-founder of PiggyVest, a fintech company that helps people save and invest with ease.",

        imgSrc: "https://nocodetechsummit.com/wp-content/uploads/elementor/thumbs/Joshua-Chibueze-qfck6agmkitwiqm6rgz9nu8cfodohrloyhf99s5go0.jpg",

        profession: "Web developer and An Entrepreneur"
      },
      shows: false,
      timeSinceMounted: 0
    };
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1
      }))
    }, 1000);
  };

  
  componentWillUnmount() {
    clearInterval(this.timerID);
  };

  toggleProfile = () => {
    this.setState({ shows: !this.state.shows})
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>

        <button style={{color: "white", backgroundColor: "black", cursor: "pointer"}} onClick={this.toggleProfile}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>


        {this.state.shows && (
          <div>
            <h2>{this.state.Person.fullName}</h2>
            <p>{this.state.Person.bio}</p>
            <img src={this.state.Person.imgSrc} alt={this.state.Person} />
            <h3>{this.state.Person.profession}</h3>

            <h4>Time since mounted: {this.state.timeSinceMounted} seconds</h4>
          </div>
        )}

      </div>
    )
  }
}

export default App;
