import React, { Component } from 'react';
import stocks from '../data/stocks.json';
import '../App.css';


class SingleStock extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            path: this.props.match.params.symbol
        };
    }
    
    render() {
        
        let symbolName = this.state.path;
        let singleStock = stocks.filter(function(stockSymbol) { 
            return stockSymbol.symbol === symbolName;
            
        });
        return (
                <section className="column">
                    <nav className="panel">
                        
                        <div className="columns">
                            <div className="column">
                                <div className="card" >
                                    <div className="card-image">
                                        <figure className="image is 640x480">
                                            <img className="SVG-two" src={"/logos/" + this.state.path + ".svg"} alt=""></img>
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <article className="message is-info">
                                            <div className="message-header">
                                                <p>Company Information</p>
                                            </div>
                                            <div className="message-body">
                                                <div className="card-Content">
                                                    <strong>Stymbol: </strong>{singleStock[0].symbol}
                                                </div>
                                                <div className="card-Content">
                                                    <strong>Ssector: </strong>{singleStock[0].sector}
                                                </div>
                                                <div className="card-Content">
                                                    <strong>Sub-Industry: </strong>{singleStock[0].subIndustry}
                                                </div>
                                                <div className="card-Content">
                                                    <strong>Address: </strong>{singleStock[0].address}
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </nav>
                </section>
            );
    }
}

export default SingleStock;