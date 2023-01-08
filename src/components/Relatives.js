import React from 'react'

function Relatives() {
  const list=["Rohan Desai","Nitin Jha","Pawan Kumar","Aanil Joshi","Ketan Jadhav"]
  const listItem=list.map((element,index)=>{

    <li key={`relativeListItem${index}`}>{element}</li>

  })
  return (
    <div>
        <ol key={'relativeList'}>
          {listItem}
        </ol>
    </div>
  )
}

export default Relatives