import './MonthSelectionModal.css';

function MonthSelectionModal(props) {

    let handleClick = (val) => {
        props.changeMonth(val);
    }

    let handleModalOutsideClick = (event) => {
        if(event.target.className === 'month-selection-modal')
            props.handleHideModal();
    }

    return <div className="month-selection-modal" style={{display: props.show == 0 ? "none" : "block"}} onClick={handleModalOutsideClick}>
        <div className='month-selection-grid'>
            <div  className='month-item' onClick={() => handleClick(0)} value='0'>January</div>
            <div  className='month-item' onClick={() => handleClick(1)} value='1'>February</div>
            <div  className='month-item' onClick={() => handleClick(2)} value='2'>March</div>
            <div  className='month-item' onClick={() => handleClick(3)} value='3'>April</div>
            <div  className='month-item' onClick={() => handleClick(4)} value='4'>May</div>
            <div  className='month-item' onClick={() => handleClick(5)} value='5'>June</div>
            <div  className='month-item' onClick={() => handleClick(6)} value='6'>July</div>
            <div  className='month-item' onClick={() => handleClick(7)} value='7'>August</div>
            <div  className='month-item' onClick={() => handleClick(8)} value='8'>September</div>
            <div  className='month-item' onClick={() => handleClick(9)} value='9'>October</div>
            <div  className='month-item' onClick={() => handleClick(10)} value='10'>November</div>
            <div  className='month-item' onClick={() => handleClick(11)} value='11'>December</div>
        </div>
    </div>
}

export default MonthSelectionModal;