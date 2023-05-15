import AdditionSection from './components/AdditionSection';
import ListSection from './components/ListSection';
import DetailSection from './components/DetailSection';
import { useState } from 'react';

const bodyStyle = {
    border: "solid 2px black",
    margin: "0 20%",
};

const Body = () => {
    const [selectedCarDetailIndex, selectCarDetailIndex] = useState(-1);
    const [imagePreview, setImagePreview] = useState("");
    return (
        <div style={bodyStyle}>
            <AdditionSection 
                setImagePreview={setImagePreview} 
                imagePreview={imagePreview}
                selectedCarDetailIndex={selectedCarDetailIndex} />
            <hr className="border-black"></hr>
            <div className="grid grid-cols-2 gap-0">
                <ListSection selectCarDetailIndex={selectCarDetailIndex}
                             selectedCarDetailIndex={selectedCarDetailIndex} />
                <DetailSection style={{height:"300px"}} 
                               selectedCarDetailIndex={selectedCarDetailIndex} 
                               selectCarDetailIndex={selectCarDetailIndex}
                               imagePreview={imagePreview}/>
            </div>
        </div>
        
    );
}

export default Body;