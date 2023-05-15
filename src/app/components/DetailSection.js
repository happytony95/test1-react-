import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { deletion } from '../slice/carSlice';

const DetailSection = ({selectCarDetailIndex, selectedCarDetailIndex, imagePreview}) => {
    const cars = useSelector(state => state.car.cars);
    const dispatch = useDispatch();

    const clickDeletion = () => {
        dispatch(deletion(selectedCarDetailIndex));
        if (selectedCarDetailIndex >= 0)
            selectCarDetailIndex(0);
    }

    return (
        <div className="border-l-2 border-black p-2" style={{height:"300px"}}>
            <h4 className="text-2xl flex justify-center"><b>Detail Automobilu</b></h4>
            <table className="p-2 border-black">
                {selectedCarDetailIndex >= 0 && <tbody>
                    <tr>
                        <td>značka</td>
                        <td>{cars[selectedCarDetailIndex].brand}</td>
                    </tr>
                    <tr>
                        <td>model</td>
                        <td>{cars[selectedCarDetailIndex].model}</td>
                    </tr>
                    <tr>
                        <td>rok výroby</td>
                        <td>{cars[selectedCarDetailIndex].year}</td>
                    </tr>
                </tbody>}
            </table> 
            {imagePreview && <img src={imagePreview} alt='image preview' />}
            <Button className="flex justify-center"
                    style={{textTransform: 'none'}} 
                    variant="contained" 
                    onClick={clickDeletion}>
                Delete 
            </Button>
        </div>
    );
}

export default DetailSection;