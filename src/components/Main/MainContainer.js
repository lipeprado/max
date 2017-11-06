import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dataFormActions from '../../actions/dataFormActions';

export class MainContainer extends Component {
  render() {
    return (
      <div>
        <h1>Teste</h1>
      </div>
    );
  }
}

MainContainer.propTypes = {/* eslint-disable */
  users: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    users: {},
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dataFormActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
