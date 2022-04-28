import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './style.css';

function App()
{



  function uploadFile(e)
  {
e.preventDefault();
console.log("file uploaded:"+file);
  }


function seeFile(e)
{
e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

reader.onload = ()=>{
  setFile(file);
  setImagePreviewURL(reader.result);
}

  reader.readAsDataURL(file);

}


const[file, setFile]= useState(null);
const[imagePreviewURL, setImagePreviewURL]= useState(null);


  return (

        <div className="App">

        <div className="wrapper fadeInDown">
          <div id="formContent">

            <h2 className="active"> Image Previewer </h2>


            <form>
         
           <input type="file" onChange={seeFile} className="fileInput fadeIn third" id="myFile" name="myFile" style={{display: 'none'}}/>
            <input type="button"   onClick={()=>{const myFile =  document.getElementById("myFile"); myFile.click()}} className="fadeIn fourth" value="Select An Image To Preview"/>
            </form>


            <div id="formFooter">

            </div>

          </div>

          <div id="formContent1">

              <h2 className="active"> Preview Of Your Image </h2>


                      <div className="imgPreview fadeIn third">{imagePreviewURL? <img src={imagePreviewURL} alt="imagePreviewURL is NOT null"/>:"Upload File To See Preview Of Your Image"}</div>


                          <div id="formFooter">

                          </div>


        </div>


</div>

        </div>

  );
}

export default App;

