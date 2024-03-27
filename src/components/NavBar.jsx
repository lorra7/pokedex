function NavBar ({ handleClickPast, handleClickNext }) {
return (
    <div>


      <button onClick={handleClickPast}>Précédent</button>
      <button onClick={handleClickNext}>Suivant</button>
  
    </div>
  );
}
export default NavBar;