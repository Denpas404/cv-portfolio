import React from 'react';

export default function MainCard() {
    return (
        <div className="bg-black min-h-screen flex justify-center items-center">
            {/* Folder Card */}
            <div className="relative bg-white w-[420px] h-[310px] rounded-[10px] rounded-tl-[10px] shadow-lg">
                {/* Folder Tab - Positioned on Right Side */}
                <div
                    className="absolute top-[-18px] right-0 bg-gray-400 w-[200px] h-[25px] rounded-tr-[25px]"
                    style={{
                        clipPath: "path('M 200 0 L 40 0 C 15 2, 25 16, 0 28 L 200 50 z')"
                    }}
                ></div>

                <div className="p-6">
                    <h1 className="text-gray-900 text-xl font-semibold">Folder Card</h1>
                    <p className="text-gray-700">This is a folder-styled card with a tab on the right.</p>
                </div>
            </div>
        </div>
    );
}
