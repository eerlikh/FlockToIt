'use strict'
import React, { Component } from 'react';
import Prompt from 'react-native-prompt';

class BugReportPrompt extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Prompt
          title="Describe the bug: "
          placeholder="Bug Description"
          defaultValue="No Description Given"
          visible={this.props.promptVisible}
          onCancel={() => this.props.onCancel()}
          onSubmit={(value) => {
            this.props.onSubmit();
            throw new Error("Bug Report: " + value);
      }}/>
    )
  }

}

module.exports = BugReportPrompt
