import React, { Component } from "react";
let array = []
for (let i = 0; i < 13; i++) {
    array.push(`/assets/images/${i}.jpg`)
}

class ClickContainer extends Component {

    state = {
        images: array,
        "1": "unclicked",
        "2": "unclicked",
        "3": "unclicked",
        "4": "unclicked",
        "5": "unclicked",
        "6": "unclicked",
        "7": "unclicked",
        "8": "unclicked",
        "9": "unclicked",
        "10": "unclicked",
        "11": "unclicked",
        "12": "unclicked",
        score: 0
    }

    componentDidMount() {
        this.shuffle()
    }

    shuffle() {
        let array = []
        for (let i = 0; i < 13; i++) {
            array.push(`/assets/images/${i}.jpg`)
        }
         const shuffle = (array) => {
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
        array = shuffle(array)
        this.shuffle = this.shuffle.bind(this)
        this.setState({ images: array })

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <img src={this.state.images[1]} className="col-4" onClick={this.shuffle} /> <img src={this.state.images[2]} className="col-4" onClick={this.shuffle} /> <img src={this.state.images[3]} className="col-4" onClick={this.shuffle} />
                </div>


                <div className="container">
                    <div className="row">
                        <img src={this.state.images[4]} className="col-4" onClick={this.shuffle} /> <img src={this.state.images[5]} className="col-4" onClick={this.shuffle} /> <img src={this.state.images[6]} className="col-4" onClick={this.shuffle} />
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <img src={this.state.images[7]} className="col-4" onClick={this.shuffle} /> <img src={this.state.images[8]} className="col-4" onClick={this.shuffle} /> <img src={this.state.images[9]} className="col-4" onClick={this.shuffle} />
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <img src={this.state.images[10]} className="col-4" onClick={this.shuffle} /> <img src={this.state.images[11]} className="col-4" onClick={this.shuffle} /> <img src={this.state.images[12]} className="col-4" onClick={this.shuffle} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ClickContainer