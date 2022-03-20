import styles from "./Header.module.css"
import {useTranslation} from "react-i18next"
import {useState} from "react";
//import useLocalStorage from 'react-use-localstorage';


const Header = () => {
    const {i18n} = useTranslation()
    const [toggle,setToggle] = useState(true)
/*  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light")

    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
      }*/

    const handleLangChange = () => {
        if(toggle){
            i18n.changeLanguage("hu")
            setToggle(false)
        } else {
            i18n.changeLanguage("en")
            setToggle(true)
        }
    }

  return (
    <header className={styles.Header}>
        {/*<button className={styles.Header__themeSelector} onClick={switchTheme}>{theme === "light" ? "🌙" : "🔆"}</button>*/}
        <button className={styles.Header__langSelector} onClick={handleLangChange}>{i18n.resolvedLanguage}</button>
    </header>
  )
}

export default Header