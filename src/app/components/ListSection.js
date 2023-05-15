import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deletion } from '../slice/carSlice';

const ListSection = ({selectCarDetailIndex, selectedCarDetailIndex}) => {
    const car = useSelector(state => state.car.cars);
    const dispatch = useDispatch();

    return (
        <div style={{height:"300px"}}>
             <h4 className="text-2xl flex justify-center"><b>Seznam vozidel</b></h4>
            <ul className="p-3">
                {
                    car.map((item, index) => {
                        return (
                            <li className="flex justify-between"
                                onClick={() => selectCarDetailIndex(index)}
                                key={index}>
                                {item.brand}&nbsp;{item.model}&nbsp;{item.year}
                                <Button variant="contained" 
                                        onClick={(index) => {
                                            dispatch(deletion(index));
                                            if(car.length >= 1)
                                            selectCarDetailIndex(car.length-1);
                                            console.log(selectedCarDetailIndex  )
                                                }}>
                                    X
                                </Button>
                            </li>   
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default ListSection;