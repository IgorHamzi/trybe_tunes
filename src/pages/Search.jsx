import React, { Component } from 'react';
import Header from '../components/Header';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      bandName: '',
      buttonDisabled: true,
    };

    this.enableDisableBtn = this.enableDisableBtn.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target: { value, name } }) {
    this.setState({ [name]: value }, () => { this.enableDisableBtn(); });
  }

  enableDisableBtn() {
    const {
      bandName,
    } = this.state;
    const number = 2;
    if (bandName.length < number) {
      this.setState({ buttonDisabled: true });
    } else {
      this.setState({ buttonDisabled: false });
    }
  }

  render() {
    const {
      state: {
        bandName,
        buttonDisabled,
      },
      onInputChange,
      // onClickButton,
    } = this;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="bandName">
            nome da banda:
            <input
              data-testid="search-artist-input"
              name="bandName"
              type="text"
              value={ bandName }
              onChange={ onInputChange }
            />
          </label>
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ buttonDisabled }
            // onClick={ onClickButton }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}
