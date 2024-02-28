import { useDispatch, useSelector } from 'react-redux';
import styles from './Profile.module.css';
import { RootState } from '@/store/store';
import { updateLook } from '@/store/alpaca-state';
import html2canvas from 'html2canvas';

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

  const download = async () => {
    const alpaca = document.getElementById('alpaca')!;
    const canvas = await html2canvas(alpaca, {scale: 2});

    const imageURL = canvas.toDataURL("image/png", 1.0);
    const tempLink = document.createElement("a");

    tempLink.href = imageURL;
    tempLink.download = 'alpaca.png';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    tempLink.remove();
  }

  return (
    <div className={styles.profileContainer}>
      <div id="alpaca" className={styles.profilePic}>
        {Object.keys(alpacaLook).map(part => 
          (alpacaLook[part] !== "" && <img src={alpacaLook[part]} alt={part} key={part}/>)
        )}
      </div>

      <div className={styles.actions}>
        <button onClick={randomizeAlpaca}>🔀 Random</button>
        <button onClick={download}>⬇️ Download</button>
      </div>
    </div>
  )
}

export default Profile;