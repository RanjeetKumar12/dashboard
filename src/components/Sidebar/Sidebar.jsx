import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import {ReactComponent as ShopIcon} from "../../assets/shop.svg";
import {ReactComponent as GuildIcon} from "../../assets/community.svg";
import {ReactComponent as DashboardIcon} from "../../assets/dashboard.svg";
import {ReactComponent as GraveyardIcon} from "../../assets/ghost.svg";
import {ReactComponent as GitIcon} from "../../assets/github.svg";
import {ReactComponent as MenuLogo} from "../../assets/menu.svg";
import './_Sidebar.scss';


const Sidebar = () => {
    // intial state of menu collapse
    const [menuCollapse, setMenuCollapse] = useState(false);


    return (
        <div id = "header">
            <ProSidebar 
            collapsed= {menuCollapse} 
            onMouseEnter= {() => setMenuCollapse(false)} 
            onMouseLeave= {()=> setMenuCollapse(true)}
            breakPoint="md"
            >
                <SidebarHeader>
                    <Menu>
                        <MenuItem  icon = {<GraveyardIcon/>} >Graveyard
                            <Link to="/home" />
                        </MenuItem>
                    </Menu>
                </SidebarHeader>
                <SidebarContent>
                    <Menu>
                        <MenuItem icon= {<DashboardIcon className='w-6'/>} >Dashboard
                            <Link to="/" />
                        </MenuItem>
                        <MenuItem icon ={<GuildIcon className='w-6'/>}>Manage Guild
                            <Link to="/" />
                        </MenuItem>
                        <MenuItem icon ={<ShopIcon className='w-7'/>}>Shop
                            <Link to="/" />
                        </MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Menu>
                        <MenuItem icon = {<GitIcon/>} >
                        View Source
                        <Link to="/" />
                        </MenuItem>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        </div>
    )
}




export default Sidebar

