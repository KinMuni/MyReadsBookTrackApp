import React, { Component } from "react";
import PropTypes from "prop-types";


class ShelfUpdater extends Component {
	static PropTypes = {
		book: PropTypes.object.isRequired,
		updateShelf: PropTypes.func.isRequired

	};
     
     state= {

     	currentShelf: this.props.book.shelf,
     	updating: false
     };
         // update shelf method

     updateShelf= (evt) => {
     	this.props.updateShelf(this.props.book, evt.target.value);
     	this.setState({
     		currentShelf:evt.target.value,
     		updating: true
     	});

     };
  ComponentWillReceiveProps() {
  	// 
  	this.setState ({

  		updating: false
  	});
  }
  
  render () {

  	return (

  		<div className="book-shelf-changer">
                <select
                    value={this.state.currentShelf}
                    onChange={this.updateShelf}
                >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                { this.state.updating && (<div className="cssload-spin-box"></div>)}
            </div>

  		)
  }


}
export default ShelfUpdater;