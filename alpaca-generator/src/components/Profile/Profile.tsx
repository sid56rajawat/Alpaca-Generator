import { useDispatch, useSelector } from 'react-redux';
import styles from './Profile.module.css';
import { RootState } from '@/store/store';
import { updateLook } from '@/store/alpaca-state';

function Profile() {
  const alpacaLook = useSelector((state: RootState) => state.alpaca.alpacaLook);
  const choices = useSelector((state: RootState) => state.alpaca.choices);
  const dispatch = useDispatch();

  function randomNumber(min:number, max:number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const randomizeAlpaca = () => {
    console.log("randomizing alpaca");
    for(const key of Object.keys(choices)){
      const arr = choices[key];
      dispatch(updateLook({key, val:arr[randomNumber(0,arr.length)]}));
    }
  }

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
        <button onClick={randomizeAlpaca}>🔀 Random</button>
        <button>⬇️ Download</button>
      </div>
    </div>
  )
}

export default Profile;