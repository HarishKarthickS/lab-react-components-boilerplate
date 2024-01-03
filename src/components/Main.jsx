import React from 'react'
// import lake from "C:/Users/shari/Documents/New folder (2)/Live-session/Live-session-3/lab-react-components-boilerplate/src/image/lake.JPG";
// const imageData = [
//   {
//     id:1,
//     img:lake 
//   },
//   {
//     id:2,
//     img:lake
//   },
//   {
//     id:3,
//     img:lake
//   },
//   {
//     id:4,
//     img:lake
//   }
// ]
const Main =(Props)=>{
    const {imageData}=Props;
    return(
        <div>
        {
          imageData.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
      </div>
    )
}

export default Main