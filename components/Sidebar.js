import React from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { MdOutlineCases } from 'react-icons/md';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMessage } from 'react-icons/ai'

import "./Sidebar.css"
function sidebar() {
return (
    <div className="side">
        <div className="bloc">
        <h1><FaUserAlt/></h1>
        <h1 className="title"> Users</h1>
        </div>
        <div className="bloc">
        <h1><MdOutlineCases/></h1>
        <h1 className="title"> Cases</h1>
        </div>
        <div className="bloc">
        <h1><AiOutlineUsergroupAdd/></h1>
        <h1 className="title"> Add user</h1>
        </div>
        <div className="bloc">
        <h1><AiOutlineUsergroupAdd/></h1>
        <h1 className="title"> Add case</h1>
        </div>
        <div className="bloc">
        <h1><CgProfile/></h1>
        <h1 className="title"> Profile</h1>
        </div>
        <div className="bloc">
        <h1><AiOutlineMessage/></h1>
        <h1 className="title"> Message</h1>  
        </div>      
    </div>
)
}   

export default sidebar