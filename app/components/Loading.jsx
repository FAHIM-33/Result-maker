import React from 'react';

function Loading(props) {
    return (
        <div className='min-h-screen flex items-center justify-center fixed inset-0 bg-[#0000008f] z-20'>
            <div className="w-14 h-14 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-white"></div>
        </div>
    );
}

export default Loading;