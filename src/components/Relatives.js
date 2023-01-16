import React from 'react'

function Relatives() {
  const list=["Rohan Desai","Nitin Jha","Pawan Kumar","Aanil Joshi","Ketan Jadhav"]
 

  return (
    <div>
      
        <ol>
          {
            list.map((relative,index)=>{
                return <li key={relative+index}>{relative}</li>
            })
          }
        </ol>
    </div>
  )
}

export default Relatives