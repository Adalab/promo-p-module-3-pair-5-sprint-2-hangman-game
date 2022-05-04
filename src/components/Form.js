import PropTypes from 'prop-types';

function Form (props) {
    const handleSubmit = (event) => {
        event.preventDefault();
      };

    return (<form className='form' onSubmit={handleSubmit}>
    <label className='title' htmlFor='last-letter'>
      Escribe una letra:
    </label>
    <input
      autoComplete={props.auto}
      className='form__input'
      maxLength={props.max}
      type={props.inputType}
      name='last-letter'
      id='last-letter'
      onChange={props.handleFunction}
      value={props.lastLetter}
    />
  </form>);
}

Form.defaultProps = {
  inputType: "text",
  auto: 'off',
  max: '1',
}

Form.propTypes = {
  max: PropTypes.string,
  handleFunction: PropTypes.func,
}

export default Form;