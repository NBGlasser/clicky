import React, { Component } from "react";
let array = []
for (let i = 1; i < 13; i++) {
    array.push(`/assets/images/${i}.jpg`)
}

class ClickContainer extends Component {

    state = {
        images: array,
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
        "6": false,
        "7": false,
        "8": false,
        "9": false,
        "10": false,
        "11": false,
        "12": false,
        score: 0
    }

    componentDidMount() {
        this.shuffle()
    }

    shuffle() {
        let array = []
        for (let i = 1; i < 13; i++) {
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

    handleBtnClick = event => {
        let id = event.currentTarget.parent.img.src - "/assets/images/" - ".jpg"
        let arr = Object.values(this.state)
        this.check = this.check.bind(this)
        if (arr[id] === false) {
            this.setState({ id: true })
            this.setState({ score: (this.state.score + 1) })
        }
        else {
            this.setState({ score: 0 })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div id="1" className="col-4">
                        <img src={this.state.images[1]} alt="img" />
                        <br></br>
                        <button handleBtnClick={this.handleBtnClick} onClick={this.shuffle}>click</button>
                    </div>
                    <div id="2" className="col-4">
                        <img src={this.state.images[2]} alt="img" />
                        <br></br>
                        <button handleBtnClick={this.handleBtnClick} onClick={this.shuffle}>click</button>
                    </div>
                    <div id="3" className="col-4">
                        <img src={this.state.images[3]} alt="img" />
                        <br></br>
                        <button handleBtnClick={this.handleBtnClick} onClick={this.shuffle}>click</button>
                    </div>
                </div>



                <div className="row">
                    <div id="4" className="col-4">
                        <img src={this.state.images[4]} alt="img" />
                        <br></br>
                        <button handleBtnClick={this.handleBtnClick} onClick={this.shuffle}>click</button>
                    </div>
                    <div id="5" className="col-4">
                        <img src={this.state.images[5]} alt="img" />
                        <br></br>
                        <button handleBtnClick={this.handleBtnClick} onClick={this.shuffle}>click</button>
                    </div>
                    <div id="6" className="col-4">
                        <img src={this.state.images[6]} alt="img" />
                        <br></br>
                        <button handleBtnClick={this.handleBtnClick} onClick={this.shuffle}>click</button>
                    </div>
                </div>



                <div className="row">
                    <div id="7" className="col-4">
                        <img src={this.state.images[7]} alt="img" />
                        <br></br>
                        <button handleBtnClick={this.handleBtnClick} onClick={this.shuffle}>click</button>
                    </div>
                    <div id="8" className="col-4">
                        <img src={this.state.images[8]} alt="img" />
                        <br></br>
                        <button handleBtnClick={this.handleBtnClick} onClick={this.shuffle}>click</button>
                    </div>
                    <div id="9" className="col-4">
                        <img src={this.state.images[9]} alt="img" />
                        <br></br>
                        <button handleBtnClick={this.handleBtnClick} onClick={this.shuffle}>click</button>
                    </div>
                </div>


                <div className="row">
                    <div id="10" className="col-4">
                        <img src={this.state.images[10]} alt="img" />
                        <br></br>
                        <button handleBtnClick={this.handleBtnClick} onClick={this.shuffle}>click</button>
                    </div>
                    <div id="11" className="col-4">
                        <img src={this.state.images[11]} alt="img" />
                        <br></br>
                        <button handleBtnClick={this.handleBtnClick} onClick={this.shuffle}>click</button>
                    </div>
                    <div id="12" className="col-4">
                        <img src={this.state.images[0]} alt="img" />
                        <br></br>
                        <button handleBtnClick={this.handleBtnClick} onClick={this.shuffle}>click</button>
                    </div>
                </div>
                <h3>Score: {this.state.score}</h3>
            </div>
        )
    }
}

export default ClickContainer