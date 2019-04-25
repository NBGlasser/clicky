import React, { Component } from "react";
import Images from "/../../images"

class ClickContainer extends Component {

    state = {
        images: [],
        one: "unclicked",
        two: "unclicked",
        three: "unclicked",
        four: "unclicked",
        five: "unclicked",
        six: "unclicked",
        seven: "unclicked",
        eight: "unclicked",
        nine: "unclicked",
        ten: "unclicked",
        eleven: "unclicked",
        twelve: "unclicked",
        score: 0
    }

    componentDidMount() {
        this.load()
    }

    load() {
        var arr = []
        for (let i = 0; i < Images.length; i++) {
            arr.push(Images[i])
        }
        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;

            while (0 !== currentIndex) {

                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }
        
        this.state.images = shuffle(arr)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <img src={this.state.images[1]} className="col-4" /> <img src={this.state.images[2]} className="col-4" /> <img src={this.state.images[3]} className="col-4" />
                </div>


                <div className="container">
                    <div className="row">
                        <img src={this.state.images[4]} className="col-4" /> <img src={this.state.images[5]} className="col-4" /> <img src={this.state.images[6]} className="col-4" />
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <img src={this.state.images[7]} className="col-4" /> <img src={this.state.images[8]} className="col-4" /> <img src={this.state.images[9]} className="col-4" />
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <img src={this.state.images[10]} className="col-4" /> <img src={this.state.images[11]} className="col-4" /> <img src={this.state.images[12]} className="col-4" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ClickContainer