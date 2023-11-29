import './App.css';
import { Styles } from './Styles';      ///Sharing file across components///


function App() {
  return (                                 ///Style object variable///
    <div style={Styles.Container}>              
         <div style={{ display: "flex", flexDirection: "column" }}> 
        
        <div       
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        > 
        
          <form style={Styles.Form}> 

          <h2 style={{ padding: "10px 20px", textAlign: "center", color: "white", marginTop: "-2px", fontSize: "35px" }}>
          Login
        </h2>

            <input                                 ///Inline Styling/>//
              type="text"                           
              placeholder="username"
              style={{
                padding: "10px 20px",
                textAlign: "center",
                color: "#2b7478",
                alignItems: "center", 
                justifyContent: "center",
                borderRadius: "10px", 
                border: "none"
              }}
            /><br/><br/>

            <input
              type="password"
              placeholder="password"
              style={{
                padding: "10px 20px",
                textAlign: "center",
                color: "#2b7478",
                alignItems: "center", 
                justifyContent: "center",
                borderRadius: "10px", 
                border: "none"
              }}
            />
            <br/>

            <a href="" style={{color: "#fbe1d5", textAlign: "center", marginLeft: "60px", fontSize: "12px"}}>
              Forgot Password?
            </a><br/><br/>

            <button style={ButtonStyle}>
              <b>login{" "}</b>
            </button>
          </form>
        </div>
      </div>
      </div>
    );
  };

  const ButtonStyle = {
    padding: "10px 20px", textAlign: "center", color: "#ffff", width: "100%", borderRadius: "10px", border: "none",
    fontSize: "16px", backgroundColor: "#54adb4"
  };
  
  

export default App;


