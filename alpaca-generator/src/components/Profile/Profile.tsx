import styles from './Profile.module.css';
import { useAlpacaContext, AlpacaCustomizations } from '@/contexts/AlpacaContextProvider';

function Profile() {
  const { alpacaLook } = useAlpacaContext();

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profilePic}>
        <div className="background">
          <img src={alpacaLook[AlpacaCustomizations.BACKGROUND]} alt="background" />
        </div>

        <div className="ears">
          <img src={alpacaLook[AlpacaCustomizations.EARS]} alt="ears" />
        </div>
        <div className="neck">
          <img src={alpacaLook[AlpacaCustomizations.NECK]} alt="neck" />
        </div>
        <div className="leg">
          <img src={alpacaLook[AlpacaCustomizations.LEG]} alt="leg" />
        </div>

        <div className="nose">
          <img src={alpacaLook[AlpacaCustomizations.NOSE]} alt="nose" />
        </div>

        <div className="hair">
          <img src={alpacaLook[AlpacaCustomizations.HAIR]} alt="hair" />
        </div>

        <div className="mouth">
          <img src={alpacaLook[AlpacaCustomizations.MOUTH]} alt="mouth" />
        </div>
        <div className="eyes">
          <img src={alpacaLook[AlpacaCustomizations.EYES]} alt="eyes" />
        </div>

        {alpacaLook[AlpacaCustomizations.ACCESSORIES] !== "" && <div className="accessories">
          <img src={alpacaLook[AlpacaCustomizations.ACCESSORIES]} alt="accessories" />
        </div>}
      </div>

      <div className={styles.actions}>
        <button>🔀 Random</button>
        <button>⬇️ Download</button>
      </div>
    </div>
  )
}

export default Profile;