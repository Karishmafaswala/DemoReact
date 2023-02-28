import React from 'react';
import StyleSheets from './StyleSheets';
import FragementMothod from './FragementMothod';
import FragmentTable from './FragmentTable';
import PureComp from './PureComp';

function NameList() {

    const namelist = ['React','JS','Angular']    
    // const personlist = [
    //     {"id": 1,
    //     "name": "Leanne Graham",
    //     "username": "Bret",
    //     "email": "Sincere@april.biz"},
    //     {   "id": 2,
    //     "name": "Ervin Howell",
    //     "username": "Antonette",
    //     "email": "Shanna@melissa.tv"},
    //     {"id": 3,
    //     "name": "Clementine Bauch",
    //     "username": "Samantha",
    //     "email": "Nathan@yesenia.net"}
    // ] 
    //const persons = personlist.map( (person,index) => <h3 key = {index}> {index+1} {person.name}  {person.username}</h3>)
    //const nameList = namelist.map((names ,index ) => <h2 key= {index}> {index+1} {names}</h2>)
    return (
    <div>
        {/* <StyleSheets/>
        <FragementMothod/> */}

        <PureComp/>
        {/* <FragmentTable/> */}

        {/* {persons} */}
        {/* {nameList} */}
        
    </div>
  )
}

export default NameList
