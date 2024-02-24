import styles from './CustomizationsMenu.module.css';

function CustomizationsMenu() {

  return (
    <div className={styles.menu}>
      <div className="keys">
        <button>Hair</button>
        <button>Ears</button>
        <button>Eyes</button>
        <button>Mouth</button>
        <button>Neck</button>
        <button>Leg</button>
        <button>Accessories</button>
        <button>Background</button>
      </div>

      <div className="values">
        
      </div>
    </div>
  )
}

export default CustomizationsMenu