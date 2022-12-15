import { useFetchAdvice } from "./hooks/useFetchAdvice";
import separatorDesktop from "./assets/pattern-divider-desktop.svg";
import separatorMobile from "./assets/pattern-divider-mobile.svg";

export const AdviceGeneratorApp = () => {
  const { id, advice, getAdvice, isLoading } = useFetchAdvice();

  return (
    <div className="adviceCard">
      <p className="advice-id">ADVICE #{id}</p>
      {isLoading && <p className="advice-loading">Cargando...</p>}
      {!isLoading && (
        <>
          <p className="advice-quote">"{advice}"</p>
        </>
      )}
      <img src={window.innerWidth > 375 ? separatorDesktop : separatorMobile} alt="separator" />
      <button className="randomButton" onClick={getAdvice}></button>
    </div>
  );
};
