import { useSelector } from 'react-redux';
import styles from './Profile.module.css';
import { RootState } from '@/store/store';

function Profile() {
  const alpacaLook = useSelector((state: RootState) => state.alpaca.alpacaLook);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profilePic}>
        {Object.keys(alpacaLook).map(part => 
          (<div key={part} className={part}>
            <img src={alpacaLook[part]} alt={part} />
          </div>)
        )}
      </div>

      <div className={styles.actions}>
        <button>🔀 Random</button>
        <button>⬇️ Download</button>
      </div>
    </div>
  )
}

export default Profile;