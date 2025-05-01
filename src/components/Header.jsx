import PropTypes from 'prop-types';
import React from 'react';

  const Header = ({onSearch}) => {
    const [textSearch, setTextSearch] = React.useState('');
    return <div className="p-4 bg-black text-white flex items-center justify-between">
        <div className="flex items-center space-x-4">
            <h1 className="text-[40px] text-red-700 font-bold mr-5 ">MOVIE</h1>
            <nav className="flex items-center space-x-4  ">
                <a href="" >Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </nav>
        </div>
        <div className="flex items-center space-x-4 "> 
            <input type="text" placeholder="Search" className="p-2 rounded-md
             bg-gray-800 text-white hover:bg-gray-700" onChange={(e) => setTextSearch(e.target.value)} value={textSearch} />
            <button className="bg-red-700 p-2 rounded-md hover:bg-red-500" onClick={() => onSearch(textSearch)} >Search</button>
        </div>

        
        
    </div>;
}

Header.propTypes = {
    onSearch: PropTypes.func,
};
export default Header;