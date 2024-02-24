import styles from './Profile.module.css';
import { useAlpacaContext } from '@contexts/AlpacaContextProvider';

function Profile() {
  const {background} = useAlpacaContext();

  return (
    <div className={styles.profile}>
      <div className="background">
        <img src={background} alt="background" />
      </div>
      
      <div className="ears"></div>
      <div className="neck"></div>
      <div className="leg"></div>
      
      <div className="nose"></div>

      <div className="hair"></div>

      <div className="mouth"></div>
      <div className="eyes"></div>

      <div className="accessories"></div>
    </div>
  )
}

export default Profile