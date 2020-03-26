import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions';
import RegisterPage from './RegisterPage';

class RegisterCreate extends React.Component {
  

  onSubmit = (formValues) => {
    this.props.signUp(formValues);
  }

  render() {
    return (
      <div>
        <h4>CreateArticle</h4>
        <RegisterPage onSubmit={this.onSubmit} />
      </div>
    );
  }
}


export default connect(null, { signUp })(RegisterCreate);