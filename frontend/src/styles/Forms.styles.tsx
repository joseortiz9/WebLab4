import styled from 'styled-components';

export const FormCompContainer = styled.div`
    &.form-group {
      margin-bottom: 1rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      align-self: center;
      label.main-label {
        color: ${props => props.theme.darkText};
        margin-right: 0.8rem;
        @media screen and (max-width: 757px) {
          {
            font-size: 1.3rem;
          }
        }
      }
    }
    .form-check-inline {
      display: inline-flex;
      margin-right: 1rem;
      margin-bottom: 0.5rem;
      align-items: center;
      @media screen and (max-width: 757px) {
        {
          font-size: 1.3rem;
          margin-right: 1.8rem;
          margin-bottom: 1.5rem;
        }
      }
      .form-check-input ~ .valid-feedback {
        margin-left: 0.5em;
      }
      .form-check-input ~ .invalid-feedback {
        margin-left: 0.5em;
      }
    }
    .form-check-input[disabled] ~ &.form-check-label, &.form-check-input:disabled ~ &.form-check-label {
       opacity: 0.5;
       color: ${props => props.theme.text};
     }
    .form-check-input {
      width: 1em;
      height: 1em;
      margin-top: 0.25em;
      vertical-align: top;
      color: ${props => props.theme.text3};
      background-color: ${props => props.theme.background};
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      border: 1px solid ${props => props.theme.text};
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      -webkit-print-color-adjust: exact;
      color-adjust: exact;
      transition: background-color 0.15s ease-in-out, background-position 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      @media screen and (max-width: 757px) {
          width: 2rem;
          height: 2rem;
      }
    }
    .form-check-input[type=radio] {
      border-radius: 50%;
    }
    .form-check-input:active {
      filter: brightness(90%);
    }
    .form-check-input:focus {
      border-color: ${props => props.theme.text3};
      outline: 0;
      box-shadow: 0 0 0 0.25rem ${props => props.theme.lightBackground};
    }
    .form-check-input:checked {
      background-color: ${props => props.theme.darkText};
      border-color: ${props => props.theme.text3};
    }
    .form-check-input:checked[type=checkbox] {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
    }
    .form-check-input:checked[type=radio] {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
    }
    .form-check-input[type=checkbox]:indeterminate {
      background-color: ${props => props.theme.foreground};
      border-color: ${props => props.theme.text3};
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
    }
    .form-check-input:disabled {
      pointer-events: none;
      filter: none;
      opacity: 0.5;
    }
    .form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
      opacity: 0.5;
    }
    
    .is-invalid {
      border-color: ${props => props.theme.invalid};
      :focus {
        border-color: ${props => props.theme.text2};
        box-shadow: 0 0 0 0.2rem ${props => props.theme.invalidShad};
      }
    }
    
    .default-text-input {
      height: calc(1.5em + 2px);
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: ${props => props.theme.text};
      background-color: ${props => props.theme.background};
      background-clip: padding-box;
      width: 100%;
      border: 1px solid ${props => props.theme.text2};
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      @media screen and (max-width: 757px) {
          padding: 0.6rem 1rem;
          font-size: 1.2rem;
      }
    }
    
    .default-text-input::-ms-expand {
      background-color: transparent;
      border: 0;
    }
    
    .default-text-input:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 ${props => props.theme.background};
    }
    
    .default-text-input:focus {
      color: ${props => props.theme.text2};
      background-color: ${props => props.theme.foreground};
      border-color: ${props => props.theme.text3};
      outline: 0;
      box-shadow: 0 0 0 0.2rem ${props => props.theme.text4};
    }
    
    &.default-text-input::-webkit-input-placeholder {
      color: ${props => props.theme.foreground};
      opacity: 1;
    }
    &.default-text-input::-moz-placeholder {
      color: ${props => props.theme.foreground};
      opacity: 1;
    }
    &.default-text-input:-ms-input-placeholder {
      color: ${props => props.theme.foreground};
      opacity: 1;
    }
    &.default-text-input::-ms-input-placeholder {
      color: ${props => props.theme.foreground};
      opacity: 1;
    }
    &.default-text-input::placeholder {
      color: ${props => props.theme.foreground};
      opacity: 1;
    }
    &.default-text-input:disabled, &.default-text-input[readonly] {
      background-color: ${props => props.theme.text};
      opacity: 1;
    }
`;

export const DefaultButton = styled.button`    
    &.default-btn {
      display: inline-block;
      font-weight: 400;
      color: ${props => props.theme.text};
      text-align: center;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: ${props => props.theme.background};
      border: 1px solid ${props => props.theme.text3};
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.25rem;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      @media screen and (max-width: 757px) {
        & {
          display: block;
          width: 100%;
          font-size: 1.2rem;
        }
      }
    }
    &.default-btn:hover {
      color: ${props => props.theme.lightBackground};
      background-color: ${props => props.theme.text3};
      text-decoration: none;
    }
    &.default-btn:focus, .default-btn.focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem ${props => props.theme.text4};
    }
    &.default-btn.disabled, .default-btn:disabled {
      opacity: 0.65;
    }
    &.default-btn:not(:disabled):not(.disabled) {
      cursor: pointer;
    }
    &a.default-btn.disabled,
    fieldset:disabled a.default-btn {
      pointer-events: none;
    }
    
    &.btn-primary {
      color: ${props => props.theme.text};
      background-color: ${props => props.theme.background};
      border-color: ${props => props.theme.text};
    }
    
    &.btn-primary:hover {
      color: ${props => props.theme.text};
      background-color: ${props => props.theme.lightBackground};
      border-color: ${props => props.theme.text4};
    }
    
    &.btn-primary:focus, .btn-primary.focus {
      color: ${props => props.theme.text};
      background-color: ${props => props.theme.foreground};
      border-color: ${props => props.theme.text4};
      box-shadow: 0 0 0 0.2rem ${props => props.theme.text3};;
    }
    
    &.btn-primary.disabled, .btn-primary:disabled {
      color: ${props => props.theme.text};
      background-color: ${props => props.theme.foreground};
      border-color: ${props => props.theme.text4};
    }
    
    &.btn-primary:not(:disabled):not(.disabled):active, &.btn-primary:not(:disabled):not(.disabled).active,
    .show > &.btn-primary.dropdown-toggle {
      color: ${props => props.theme.text};
      background-color: ${props => props.theme.foreground};
      border-color: ${props => props.theme.text4};
    }
    
    &.btn-primary:not(:disabled):not(.disabled):active:focus, &.btn-primary:not(:disabled):not(.disabled).active:focus,
    .show > &.btn-primary.dropdown-toggle:focus {
      box-shadow: 0 0 0 0.2rem ${props => props.theme.text3};;
    }
    
    &.btn-secondary {
      color: ${props => props.theme.background};
      background-color: ${props => props.theme.text};
      border-color: ${props => props.theme.text2};
    }
    
    &.btn-secondary:hover {
      color: ${props => props.theme.background};
      background-color: ${props => props.theme.darkText};
      border-color: ${props => props.theme.text4};
    }
    
    &.btn-secondary:focus, &.btn-secondary.focus {
      color: ${props => props.theme.background};
      background-color: ${props => props.theme.text};
      border-color: ${props => props.theme.text2};
      box-shadow: 0 0 0 0.2rem ${props => props.theme.text3};
    }
    
    &.btn-secondary.disabled, &.btn-secondary:disabled {
      color: ${props => props.theme.background};
      background-color: ${props => props.theme.text};
      border-color: ${props => props.theme.text2};
    }
    
    &.btn-secondary:not(:disabled):not(.disabled):active, &.btn-secondary:not(:disabled):not(.disabled).active,
    .show > &.btn-secondary.dropdown-toggle {
      color: ${props => props.theme.background};
      background-color: ${props => props.theme.text};
      border-color: ${props => props.theme.text2};
    }
    
    &.btn-secondary:not(:disabled):not(.disabled):active:focus, &.btn-secondary:not(:disabled):not(.disabled).active:focus,
    .show > &.btn-secondary.dropdown-toggle:focus {
      box-shadow: 0 0 0 0.2rem ${props => props.theme.foreground};
    }
    
    &.btn-block {
      display: block;
      width: 100%;
    }
    
    &.btn-block + &.btn-block {
      margin-top: 0.5rem;
    }

    &.invalid-feedback {
      margin-top: 0.25rem;
      font-size: 80%;
      color: ${props => props.theme.invalid};
    }
`