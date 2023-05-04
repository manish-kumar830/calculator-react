
import { useState } from "react";
import "../style/style.css"

const Calculator = ()=>{

   const [result,setResult] = useState("");
   
   const clickHandler=(e)=>{
      setResult(result.concat(e.target.value));
   }

   const resetResult=()=>{
      setResult("");
   }

   const calculate=()=>{
      setResult(eval(result).toString());
   }

   return (
      <>
         <div className="container">
            <input type="text" className="input_field" value={result}/>
            
            <table>
               <tr>
                  <td><button type="text" onClick={clickHandler} value="1">1</button></td>
                  <td><button type="text" onClick={clickHandler} value="2">2</button></td>
                  <td><button type="text" onClick={clickHandler} value="3">3</button></td>
                  <td><button type="text" onClick={clickHandler} value="+">+</button></td>
               </tr>
               <tr>
                  <td><button type="text" onClick={clickHandler} value="4">4</button></td>
                  <td><button type="text" onClick={clickHandler} value="5">5</button></td>
                  <td><button type="text" onClick={clickHandler} value="6">6</button></td>
                  <td><button type="text" onClick={clickHandler} value="-">-</button></td>
               </tr>
               <tr>
                  <td><button type="text" onClick={clickHandler} value="7">7</button></td>
                  <td><button type="text" onClick={clickHandler} value="8">8</button></td>
                  <td><button type="text" onClick={clickHandler} value="9">9</button></td>
                  <td><button type="text" onClick={clickHandler} value="/">/</button></td>
               </tr>
               <tr>
                  <td><button type="text" onClick={resetResult} value="CLR">CLR</button></td>
                  <td><button type="text" onClick={clickHandler} value="0">0</button></td>
                  <td><button type="text" onClick={calculate} value="=">=</button></td>
                  <td><button type="text" onClick={clickHandler} value="*">*</button></td>
               </tr> 
            </table>
         </div>
      </>
   )
}


export default Calculator;