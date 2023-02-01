import PropTypes from 'prop-types';

export const ModalContentPropTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
