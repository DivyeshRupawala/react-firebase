import React from 'react';
import { Alert } from 'reactstrap';
import { hideAlert } from './custom-alert-actions'
import { connect } from 'react-redux'

/*This is Custom Alert.
  Type can following type : default will be info
     1.primary
     2.secondary
     3.success
     4.danger
     5.warning
     6.info
     7.light
     8.dark
*/

const CustomAlert = ({isOpen, message, type='info', onHide=f=>f}) => {
  
  const onDismiss = () => {
    onHide()
  }

  setTimeout(function() {
    onHide()
  }, 6000)

  return (
    <div className='custom-alert'>
      <Alert color={type} isOpen={isOpen} toggle={onDismiss}>
        {message}
      </Alert>
    </div>
  )  
}

const mapStatToProps = (state, props) => 
  ({
      isOpen : state.customAlert.isOpen,
      message : state.customAlert.message,
      type : state.customAlert.type
  })

const mapDispatchToProps = (dispatch) => 
  ({
    onHide () {
      dispatch(
        hideAlert()
      )      
    }
  })

const constainer = connect(mapStatToProps, mapDispatchToProps)(CustomAlert)

export default constainer;
