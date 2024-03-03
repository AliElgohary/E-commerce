import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../store/action/languageAction";

function Home() {
  const language = useSelector((state) => state.language.lang);
  const dispatch = useDispatch();
  const change = () => {
    dispatch(changeLanguage(language === 'en' ? 'ar' : 'en'));
  };
  return (
    <>
      <div className="container">
        <h1>This is Home</h1>
        <button onClick={() => change()}>{language}</button>
        <p>My language is {language}</p>
      </div>
    </>
  );
}

export default Home;
