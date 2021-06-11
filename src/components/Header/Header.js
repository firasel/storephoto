import React from 'react';

const Header = () => {
    

    return (
        <div>
            <nav className="sm:flex items-center justify-between bg-green-500 p-6">
                <div className="text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">StorePhoto</span>
                </div>
                <div className="w-auto block">
                    <div className="text-xl">
                        <a href="#responsive-header" className="block mt-4 sm:inline-block lg:mt-0 text-green-200 hover:text-white mr-4">
                            Images
                        </a>
                        <a href="#responsive-header" className="block mt-4 sm:inline-block lg:mt-0 text-green-200 hover:text-white mr-4">
                            About
                        </a>
                        <a href="#responsive-header" className="block mt-4 sm:inline-block lg:mt-0 text-green-200 hover:text-white">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;