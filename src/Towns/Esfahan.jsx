import React, { Fragment } from 'react';

const Esfahan = ({hide, dark}) => {
    return (
        <Fragment>
            <div className={`absolute rounded-3xl z-10 left-46/100 top-46/100 ${dark ? "bg-white" : "dark-mode"} w-36 flex justify-around ${hide ? "hidden" : "flex"}`}>
                <table class="table-auto border-none mx-auto w-full mt-4">
                    <thead className=''>
                        <tr className='pb-8 leading-10'>
                            <th className={`text-xs font-light ${dark ? 'c-text-light' : 'text-white'}`}> اصفهان </th>
                            <th className='text-xs font-light c-blue'> (فعال) </th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr className=''>
                            <td className='text-center'>
                                <h2 className="text-xs font-light c-text-light-dark"> کاربران </h2>
                            </td>
                            <td className='c-text-light-dark text-xs font-light text-center leading-10'> 2,653 </td>
                        </tr>
                        <tr className=''>
                            <td className='text-center'>
                                <h2 className="text-xs font-light c-text-light-dark"> ناوگان </h2>
                            </td>
                            <td className='c-text-light-dark text-xs font-light text-center leading-10'> 35 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}

export default Esfahan;