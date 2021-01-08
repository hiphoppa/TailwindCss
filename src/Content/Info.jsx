import React, { Fragment } from "react";

function MoreInfo({ dark }) {
  return (
    <Fragment>
      <h1 className={`text-3xl sm:text-4xl mt-8 mr-4 sm:mr-6 text-right ${dark ? 'c-text-light' : 'text-white'}`}> شهر های بهروب </h1>
      <div className="grid grid-cols-2 mr-2 sm:mr-6 gap-4 sm:gap-16">
        <div className="items-center flex mt-8 leading-10">
          <div className="inline-block">
            <img src="./img/Path 218@2x.png" alt="users" className="mx-auto" />
            <p className={`text-sm sm:text-lg ${dark ? 'c-text-dark' : 'c-text-light-dark'}`}> کاربران </p>
          </div>
          <h2 className="text-2xl sm:text-4xl c-text-light-dark pr-4 sm:pr-8">2569</h2>
        </div>
        <div className="items-center flex mt-8 leading-10">
          <div className="inline-block">
            <img src="./img/Layer 2@2x.png" alt="nav" className="mx-auto" />
            <p className="c-text-light text-sm sm:text-lg"> ناوگان </p>
          </div>
          <h2 className="text-2xl sm:text-4xl c-text-light-dark pr-4 sm:pr-8">200</h2>
        </div>
      </div>
      <table class="table-auto border-none w-11/12 mx-auto mt-24">
        <thead className=''>
          <tr className='border-b-2 pb-8 leading-10'>
            <th className='text-xs font-light text-right c-text-light-dark'> شهر ها </th>
            <th className='text-center'>
              <img src="./img/Path 218.png" alt="users small" className="inline-block ml-2" />
              <h2 className="text-xs font-light inline-block c-text-light-dark"> کاربران </h2>
            </th>
            <th className='text-center'>
              <img src="./img/Layer 2.png" alt="users small" className="inline-block ml-2" />
              <h2 className="text-xs font-light inline-block c-text-light-dark"> ناوگان </h2>
            </th>
            <th className='text-xs font-light c-text-light-dark text-left'> همه </th>
          </tr>
        </thead>
        <tbody className=''>
          <tr className='border-b-2 '>
            <td className='c-text-light-dark text-xs font-light text-right leading-10'>مشهد</td>
            <td className='c-text-light-dark text-xs font-light text-center leading-10'> 2,653 </td>
            <td className='c-text-light-dark text-xs font-light text-center leading-10'> 35 </td>
            <td className='c-blue text-xs font-light text-left leading-10'> (فعال) </td>
          </tr>
          <tr className='border-b-2 '>
            <td className='c-text-light-dark text-xs font-light text-right leading-10'>اصفهان</td>
            <td className='c-text-light-dark text-xs font-light text-center leading-10'> 2,653 </td>
            <td className='c-text-light-dark text-xs font-light text-center leading-10'> 35 </td>
            <td className='c-blue text-xs font-light text-left leading-10'> (فعال) </td>
          </tr>
          <tr className='border-b-2'>
            <td className='c-text-light-dark text-xs font-light text-right leading-10'>شیراز</td>
            <td className='c-text-light-dark text-xs font-light text-center leading-10'> 2,653 </td>
            <td className='c-text-light-dark text-xs font-light text-center leading-10'> 35 </td>
            <td className='c-blue text-xs font-light text-left leading-10'> (فعال) </td>
          </tr>
          <tr className='border-b-2'>
            <td className='c-text-light-dark text-xs font-light text-right leading-10'>قم</td>
            <td className='c-text-light-dark text-xs font-light text-center leading-10'> 2,653 </td>
            <td className='c-text-light-dark text-xs font-light text-center leading-10'> 35 </td>
            <td className='c-text-light-dark text-xs font-light text-left leading-10'> به زودی </td>
          </tr>
          <tr className='border-b-2'>
            <td className='c-text-light-dark text-xs font-light text-right leading-10'>اردبیل</td>
            <td className='c-text-light-dark text-xs font-light text-center leading-10'> 2,653 </td>
            <td className='c-text-light-dark text-xs font-light text-center leading-10'> 35 </td>
            <td className='c-text-light-dark text-xs font-light text-left leading-10'> به زودی </td>
          </tr>
          <tr className=''>
            <td className='c-text-light-dark text-xs font-light text-right leading-10'>فارس</td>
            <td className='c-text-light-dark text-xs font-light text-center leading-10'> 2,653 </td>
            <td className='c-text-light-dark text-xs font-light text-center leading-10'> 35 </td>
            <td className='c-text-light-dark text-xs font-light text-left leading-10'> به زودی </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}
export default MoreInfo