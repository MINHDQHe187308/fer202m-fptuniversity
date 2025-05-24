const enable = false;
const text = "My Button";
const size = 50;
const placeholder="Plese input a vlaue...";
const App = () => { 
    return (
       <section>    
        <button enable={!enable}>{text}</button>
         <input placeholder={placeholder} size={50}></input>
       </section>
           
    );
}
export default App;