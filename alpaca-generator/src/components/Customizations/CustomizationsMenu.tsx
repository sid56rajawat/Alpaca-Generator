import { useDispatch, useSelector } from 'react-redux';
import styles from './CustomizationsMenu.module.css';
import { useState } from 'react';
import { RootState } from '@/store/store';
import { updateLook } from '@/store/alpaca-state';

function CustomizationsMenu() {
  const choices = useSelector((state: RootState) => state.alpaca.choices);
  const alpacaLook = useSelector((state: RootState) => state.alpaca.alpacaLook);
  const dispatch = useDispatch();
  const [selectedKey, setSelectedKey] = useState("Hair");

  const changeAplacaLook = (key: string, val: string) => {
    val = val.toLowerCase();
    val = val.replace(' ','-');
    const path = alpacaLook[key].split('/');
    path.pop();
    path.push(`${val}.png`);
    dispatch(updateLook({key,val: path.join('/')}));
  }

  return (
    <div className={styles.menu}>
      <div>
        <div className={styles.title}>CUSTOMIZE THE ALPACA</div>
        <div className={styles.keys}>
          {Object.keys(choices).map((item) => 
            (<button className={`cutomize-button ${selectedKey === item && "active-button"}`} key={item} onClick={() => setSelectedKey(item)}>{item}</button>)
          )}
        </div>
      </div>

      <div>
        <div className={styles.title}>STYLE</div>
        <div className={styles.values}>
          {
            choices[selectedKey].map((item) => 
            (<button 
              className={`cutomize-button ${alpacaLook[selectedKey].split('/').slice(-1)[0] == `${item.toLowerCase()}.png` && "active-button"}`} 
              key={item} 
              onClick={() => {changeAplacaLook(selectedKey,item);}}>
                {item}
            </button>)
            )
          }
        </div>
      </div>
    </div>
  )
}

export default CustomizationsMenu