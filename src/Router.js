import{BrowserRouter, Routes, Route} from 'react-router-dom';
import ProvaSyscoin from './syscoin';
function RoutesApp(){
    return(
        <BrowserRouter>

            <Routes>
                <Route path="/provasyscoin?" element={<ProvaSyscoin/>} />
            </Routes>
        
        </BrowserRouter>
    )

}

export default RoutesApp