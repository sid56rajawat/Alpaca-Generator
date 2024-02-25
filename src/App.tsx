import Profile from "./components/Profile/Profile";
import CustomizationsMenu from "./components/Customizations/CustomizationsMenu";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.main}>
      <header className={styles.heading}>ALPACA GENERATOR</header>
      <div className={styles.sandbox}>
        <Profile />
        <CustomizationsMenu />
      </div>      
    </div>
  )
}

export default App