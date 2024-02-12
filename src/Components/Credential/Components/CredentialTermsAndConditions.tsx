import { useRef } from 'react';
import '../../../Styles/Credential/Components/CredentialTermsAndConditions.css';

const CredentialTermsAndConditions = () => {


  return (
    <div className='CredentialTermsAndConditions'>
        <input type="checkbox" required></input>
        <label>I accept the Terms & Conditions</label>
    </div>
  )
}

export default CredentialTermsAndConditions