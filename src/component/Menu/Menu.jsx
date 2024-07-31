import './Menu.css';

function Menu(){
    return <div className='menu'>
        <div className='logo'>
            <div className="logo-img"></div>
            <div className="logo-title"></div>
        </div>
        
        <div className="menu-items">
            <div className="icon-item">
                <i className="icon fa-regular fa-calendar-days"></i><span className='icon-desc'>Calendar</span>
            </div>
            <div className="icon-item">
                <i className="icon fa-solid fa-list-check"></i><span className='icon-desc'>Tasks</span>
            </div>
        </div>
    </div>
}

export default Menu;