import React, { Component } from "react";
let array = []
for (let i = 0; i < 13; i++) {
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
        this.check ()
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

    check() {
    let id = this.id.val()
    let arr = Object.values(this.state)
    this.check = this.check.bind(this)
    if(arr[id] === false){
        this.setState({id: true})
        this.setState({score: (this.state.score + 1)})
    }
    else{
        this.setState({score: 0})
    }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <img src={this.state.images[1]} id="1" className="col-4" onClick={this.shuffle} /> <img src={this.state.images[2]} id="2" className="col-4" onClick={this.shuffle} /> <img src={this.state.images[3]} id="3" className="col-4" onClick={this.shuffle} />
                </div>


                <div className="container">
                    <div className="row">
                        <img src={this.state.images[4]} id="4" className="col-4" onClick={this.shuffle} /> <img src={this.state.images[5]} id="5" className="col-4" onClick={this.shuffle} /> <img src={this.state.images[6]} id="6" className="col-4" onClick={this.shuffle} />
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <img src={this.state.images[7]} id="7" className="col-4" onClick={this.shuffle} /> <img src={this.state.images[8]} id="8" className="col-4" onClick={this.shuffle} /> <img src={this.state.images[9]} id="9" className="col-4" onClick={this.shuffle} />
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <img src={this.state.images[10]} id="10" className="col-4" onClick={this.shuffle} /> <img src={this.state.images[11]} id="11" className="col-4" onClick={this.shuffle} /> <img src={this.state.images[12]} id="12" className="col-4" onClick={this.shuffle} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ClickContainer