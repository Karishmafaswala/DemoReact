import React from 'react'

function FragmentColumn() {
    const items = ['apple','organe','kiwi']

  return (
    // <React.Fragment>
    //   {
    //     items.map(item => (
    //         <React.Fragment key = {item.id}>
    //             <p>{item}</p>
    //         </React.Fragment>
    //     ))
    //   }
    // </React.Fragment>

    <>
        <td>First Name</td>
        <td>Last Name</td>
    </>
  )
}

export default FragmentColumn
