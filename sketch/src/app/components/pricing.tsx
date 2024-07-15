import React from "react";

export default function Pricing(){
    return (
        
        <React.Fragment>
           
        <div className="mx-8">
            <div>
                <p  className="text-center text-5xl" style={{color:'#234CAD'}}>Explore our simple pricing</p>
                <p  className="text-center" style={{color:'#234CAD'}}>We offer one of the most competitive prices on</p>
                <p  className="text-center" style={{color:'#234CAD'}}>the market for everyone.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                    <div className=" p-4 rounded-[60px] text-center bg-[#F2F6FF]">
                        <p className="text-2xl pb-4" style={{color:'#234CAD'}}>Basic</p>
                        <p className="text-6xl" style={{color:'#234CAD'}}>$9</p>
                        <p className="text-xl pb-4" style={{color:'#234CAD'}}>Per month</p>
                        <button type="button" className="bg-white rounded-full text-2xl text-[#234CAD] font-medium px-12 py-2 text-center border-2 border-white border-solid">Learn more</button>
                    </div>
                    <div className=" p-4 rounded-[60px] text-center bg-white border-2 border-[#234CAD] border-solid">
                    <p className="text-2xl pb-4" style={{color:'#234CAD'}}>Premium</p>
                        <p className="text-6xl" style={{color:'#234CAD'}}>$29</p>
                        <p className="text-xl pb-4" style={{color:'#234CAD'}}>Per month</p>
                        <button type="button" className="bg-white rounded-full text-2xl text-[#234CAD] font-medium px-12 py-2 text-center border-2 border-[#234CAD] border-solid">Get started</button>


                    </div>

                    <div className=" p-4 rounded-[60px] text-center bg-[#F2F6FF]">
                    <p className="text-2xl pb-4" style={{color:'#234CAD'}}>Enterprise</p>
                        <p className="text-6xl" style={{color:'#234CAD'}}>$129</p>
                        <p className="text-xl pb-4" style={{color:'#234CAD'}}>Per month</p>
                        <button type="button" className="bg-white rounded-full text-2xl text-[#234CAD] font-medium px-12 py-2 text-center border-2 border-white border-solid">Learn more</button>
                    </div>
            </div>
        </div>
        </React.Fragment>
    );
}