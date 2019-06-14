import React, { Component } from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';

import { getJokes } from '../actions';


class JokesList extends Component {

  componentDidMount() {
    this.props.getJokes()
  }

  render() {
    console.log(this.props)
    if(this.props.fetchingJokes) {
      return <Loader type="Rings" color="#00BFFF" height="90" width="60" />
    } else {
      return (
        <div>
          <div>
            {this.props.jokesList ? this.props.jokesList.map(joke => {
              return (
                <div key={joke.id}>
                  <h4>{joke.joke}</h4>
                </div>
              )
            }) : <div>{this.props.error}</div>}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  jokesList: state.fetchJokesReducer.jokesList,
  fetchingJokes: state.fetchJokesReducer.fetchingJokes,
  error: state.fetchJokesReducer.error
});

export default connect( mapStateToProps, { getJokes } )(JokesList);
