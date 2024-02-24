import styles from './Profile.module.css';
import { useAlpacaContext } from '@/contexts/AlpacaContextProvider';

function Profile() {
  const {background,ears,neck,leg,nose,hair,mouth,eyes,accessories} = useAlpacaContext();

  return (
    <div className={styles.profile}>
      <div className="background">
        <img src={background} alt="background" />
      </div>
      
      <div className="ears">
        <img src={ears} alt="ears" />
      </div>
      <div className="neck">
        <img src={neck} alt="neck" />
      </div>
      <div className="leg">
      <img src={leg} alt="leg" />
      </div>
      
      <div className="nose">
        <img src={nose} alt="nose" />
      </div>

      <div className="hair">
      <img src={hair} alt="hair" />
      </div>

      <div className="mouth">
        <img src={mouth} alt="mouth" />
      </div>
      <div className="eyes">
        <img src={eyes} alt="eyes" />
      </div>

      <div className="accessories">
        {accessories && <img src={accessories} alt="accessories" />}
      </div>
    </div>
  )
}

export default Profile;