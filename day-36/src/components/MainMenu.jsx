import React from "react"
import SubMenu from "./SubMenu"
import {Nav, Navbar} from "react-bootstrap"
import menus from "../data/menus"
function MainMenu () {

    const subMenus = menus.map(subMenu => {
        return (
        <SubMenu title={subMenu.title} position={subMenu.position} children={subMenu.children}/>
           
        )
    })

    return (
        <div>
            <div>Here is main menu</div>
            <Navbar bg="light" expand="lg" >
                {subMenus}
            </Navbar>
        </div>
    )
}


export default MainMenu