import Calendar from '../Calendar/Calendar';
import Menu from '../Menu/Menu';
import './Layout.css';

function Layout() {
    return <div className='layout-container'>
        <Menu />
        <Calendar />
    </div>
}

export default Layout;