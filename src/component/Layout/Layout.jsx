import { createContext, useState } from 'react';
import Calendar from '../Calendar/Calendar';
import './Layout.css';

export let TasksContext = createContext();

function Layout() {
    let [tasks, setTasks] = useState([
        '07/31/2024', '08/1/2024', '08/3/2024', '08/20/2024', '08/21/2024',
        '09/10/2024', '09/16/2024', '10/5/2024', '11/15/2024','11/12/2024', '11/19/2024',
        '12/10/2024', '12/16/2024', '01/5/2025', '02/15/2025','02/12/2025', '03/19/2025', '03/29/2025',
        '04/10/2025', '04/16/2025', '06/5/2025', '06/15/2025','05/12/2025', '05/19/2025', '07/29/2025',

    ])

    return <div className='layout-container'>
        <TasksContext.Provider value={{tasks, setTasks}}>
            <Calendar />
        </TasksContext.Provider>
    </div>
}



export default Layout;

