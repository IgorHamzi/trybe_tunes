import React, { Component } from 'react';
// import Load from '../components/Load';
// import createUser from '../services/userAPI';
export default class Login extends Component {
  render() {
    return (
      <div data-testid="page-login"> </div>
    );
  }
}
// export default class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       userName: '',
//       buttonDisabled: true,
//       // loading: true,
//     };

//     this.enableDisableBtn = this.enableDisableBtn.bind(this);
//     this.onInputChange = this.onInputChange.bind(this);
//     this.onClickButton = this.onClickButton.bind(this);
//     this.saveUserName = this.saveUserName.bind(this);
//   }

//   onInputChange({ target }) {
//     const { name } = target;
//     this.setState({ [name]: target.value }, () => { this.enableDisableBtn(); });
//   }

//   onClickButton(event) {
//     event.preventDefault();
//     this.saveUserName();
//   }

//   enableDisableBtn() {
//     const {
//       userName,
//     } = this.state;
//     const number = 3;
//     if (userName.length < number) {
//       this.setState({ buttonDisabled: true });
//     } else {
//       this.setState({ buttonDisabled: false });
//     }
//   }

//   async saveUserName() {
//     const { userName } = this.state;
//     const load = await createUser({ name: userName });
//     if (load) {
//       return this.setState({ loading: false });
//     }
//   }

//   render() {
//     const {
//       state: {
//         userName,
//         buttonDisabled,
//         loading,
//       },
//       onInputChange,
//       onClickButton,
//     } = this;
//     return (
//       <div data-testid="page-login">
//         <form>
//           <label htmlFor="name">
//             nome:
//             <input
//               data-testid="login-name-input"
//               name="name"
//               type="text"
//               value={ userName }
//               onChange={ onInputChange }
//             />
//           </label>
//           <button
//             type="button"
//             data-testid="login-submit-button"
//             disabled={ buttonDisabled }
//             onClick={ onClickButton }
//           >
//             Salvar
//           </button>
//         </form>
//         {loading && <Load />}
//       </div>
//     );
//   }
// }
