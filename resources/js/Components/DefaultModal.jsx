import React, {useState, useEffect} from 'react';
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

const DefaultModal = (props) => {
  const [values, setValues] = useState({
    shown: false,
  })

  useEffect(() => {
    if (props.show && !values.shown) {
      setValues(values => ({
        ...values,
        ['shown']: true,
      }))
      $('#'+props.id).modal('show');
    }
  });

  return (
   <div className="modal fade" id={props.id}>
      <div className="modal-dialog">
        <div className="modal-content rounded-0">
          <div className="modal-header border-0">
            <h5 className="modal-title font-roboto-bold fz-16">{props.title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {props.msg}
          </div>
          <div className="modal-footer border-0">
            <SecondaryButton value="Close" dataDismiss="modal"/>
            {props.showconfirmationmsg && <PrimaryButton href={props.confirmationlnk ? props.confirmationlnk :""} value={props.confirmationmsg ? props.confirmationmsg : 'Ok'}/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultModal;