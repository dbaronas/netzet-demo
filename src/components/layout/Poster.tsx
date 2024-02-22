import { creditCards, listItems } from '@/constants'
import Check from '../icons/Check'
import { inter, montserrat } from '@/app/layout'
import Shield from '../icons/Shield'
import Footer from './Footer'

export default function Poster() {
  return (
    <section className='max-w-[867px] min-h-[1130px] text-center mx-auto py-[27px] px-[37px] mt-12 rounded-[5px] bg-[#FFF8EA] shadow-md shadow-[#8D8D8D36] flex items-center flex-col gap-6 xs:w-[334px] xs:h-[1445px] xs:rounded-[10px] xs:mt-6'>
      <h3 className='uppercase text-[#68C7CD] leading-5 font-extrabold text-[30px] mt-3 xs:w-[297px] xs:h-[29px] xs:text-[25px] xs:leading-[29.35px]'>
        Only you, only know
      </h3>
      <div className=''>
        <img src='/flower.png' alt='flower' />
      </div>
      <p className='font-semibold text-black text-[27px] xs:text-[20px] xs:leading-[24.58px] xs:w-[297px] xs:h-[175px]'>
        Introducing an exclusive&nbsp;
        <span className='underline text-[#0EA8B3] font-extrabold underline-offset-[4px] xs:leading-[24.58px]'>
          VIP parenting community
        </span>
        &nbsp; on Facebook with&nbsp;
        <span className='underline text-black font-extrabold '>
          additional parenting tools
        </span>
        &nbsp;and{' '}
        <span className='underline text-black font-extrabold underline-offset-[3px]'>
          tips{' '}
        </span>
        &nbsp;directly from the founder, Derek Mitchell, and other experts.
      </p>
      <h4 className='bg-[#EA4335] py-[10px] px-4 uppercase text-white w-[793px] h-[41px] font-medium text-[20px] leading-5 xs:w-[336px] xs:h-[41px] xs:text-[20px]'>
        Offer expires in&nbsp;
        <span className='font-extrabold text-[25px]'>02:22</span>
      </h4>
      <div className='grid grid-cols-2 w-[793px] min-h-[502px] items-center bg-[#FFFCF5] xs:w-[297px] xs:h-[721px] xs:rounded-[10px] xs:px-0 xs:mt-[17px] xs:flex xs:flex-col-reverse xs:gap-y-2 xs:justify-center'>
        <div className='w-[364px] h-[435px] rounded-[10px] py-[10px] pr-[21px] pl-[29px] flex flex-col items-center justify xs:w-[295px] xs:h-[768px]'>
          <ul className='max-w-[314px] min-h-[244px] flex flex-col gap-[15px]'>
            {listItems.map((item, index) => (
              <li
                key={index}
                className='font-semibold text-[23px] grid justify-items-start grid-cols-[0.07fr,0.93fr] gap-[15px] items-center leading-[28px] xs:text-[20px] xs:leading-[24.85px] xs:w-[254px]'
              >
                <Check /> {item}
              </li>
            ))}
          </ul>
          <div
            className={`mt-[17px] max-w-[320px] min-h-[133px] flex flex-col items-center gap-8 xs:w-[276px] xs:h-[133px] xs:gap-[17px] ${montserrat.className}`}
          >
            <div className='max-w-[320px] min-h-[71px] xs:w-[276px] xs:mb-[9px] xs:flex xs:flex-col xs:items-center'>
              <h4 className='text-[#0EA8B3] uppercase font-bold text-[20px] leading-[34px] max-h-[28px] max-w-[132px] text-center mb-[9px]'>
                only now
              </h4>
              <p
                className={
                  'text-[#EA4335] font-bold text-[40px] leading-[34px] max-w-[132px] max-h-[34px]'
                }
              >
                $9.95
              </p>
            </div>
            <p className='min-h-[45px] text-[12px] leading-[14.63px] font-medium text-[#8D8D8D] xs:text:center'>
              You will be charged for $9.95 every month. You can cancel anytime
              and this will not affect the challenges you purchased.
            </p>
          </div>
        </div>
        <div className='mt-6'>
          <img
            src='/family.jpg'
            alt='family'
            className='xs:h-[237px] xs:w-[255px] xs:rounded-[10px]'
          />
        </div>
      </div>
      <div className='w-[522px] h-[226px] xs:w-[285px] xs:h-[242px]'>
        <div className='flex flex-col h-[116px] gap-3 xs:h-[132px] xs:gap-[17px]'>
          <div className=''>
            <button className='xs:h-[44px] font-extrabold text-[16px] leading-5 text-white bg-[#0EA8B3] uppercase rounded-[5px] py-2 px-[22px] w-full'>
              join now
            </button>
          </div>
          <div>
            <button className='text-[#8D8D8D] underline py-2 px-[22px] rounded-[5px] w-[232px] h-[22px] font-semibold text-[16px] leading-5 xs:h-[20px]'>
              No, thank you
            </button>
          </div>
          <p className='text-[#2F2F2F] font-medium text-[12px] leading-4 h-4'>
            By clicking on Join Now button, you actively agree to the T&Cs and
            Privacy Policy.
          </p>
          <div className='h-[85px] mt-[10px]'>
            <div
              className={`flex justify-center gap-3 ${inter.className} px-[10px] rounded-[5px]`}
            >
              <Shield />
              <p className='text-[#05B133] font-bold text-[14px]'>
                Pay safe & secure
              </p>
            </div>
            <div>
              <div className='flex justify-evenly'>
                {creditCards.map((card, index) => (
                  <img
                    src={card.icon}
                    alt={card.id}
                    key={index}
                    className=' h-[22px] w-[42px] mt-4'
                  />
                ))}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
