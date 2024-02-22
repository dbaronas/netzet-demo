import Link from 'next/link'
import Phone from '../icons/Phone'

export default function Header() {
  return (
    <header className='flex justify-evenly items-center bg-[#3C3C3B] h-[75px] xs:h-[70px] w-full'>
      <nav className='xs:hidden'>
        <Link href={'/'} className='flex gap-4 items-center'>
          <img src='/logo.png' alt='logo' className='w-[38.32px] h-[42.83px]' />
          <h1 className='text-white w-[100.13px] h-[31.56px] italic font-extrabold relative'>
            <p className='w-[96.92px] h-[18.89px]'>Parenting</p>
            <p className='w-[69.59px] h-[14.02px] absolute top-4 -left-1'>
              Leader
            </p>
          </h1>
        </Link>
      </nav>
      <div className='flex text-white justify-center items-center gap-2 font-semibold xs:gap-x-9'>
        <div className='flex flex-row items-center gap-2 xs:flex-col xs:items-start xs:w-[167px] xs:h-[31px] xs:justify-center xs:gap-1'>
          <h2 className='xs:font-semibold xs:text-[12px] xs:leading-5 xs:h-[15px]'>
            This offer expires in:
          </h2>
          <div className='mr-5 xs:w-[167px] xs:h-[31px]'>
            <img src='/timer.png' alt='timer' />
          </div>
        </div>
        <button className='uppercase text-white bg-[#03C100] py-2 px-[22px] w-[241px] h-[36px] rounded-[5px] xs:w-[129px] xs:h-[44px]'>
          <p className='leading-5 w-[197px] font-extrabold xs:text-[13px] xs:leading-[13px] xs:w-[79px] xs:h-[26px]'>
            Accept the challenge
          </p>
        </button>
      </div>
      <div className='flex gap-4 items-center leading-5 xs:hidden'>
        <Phone />
        <a
          className='text-white w-[139px] h-[20px] font-bold text-[18px]'
          href='tel:1 (302) 316-5995'
        >
          1 (302) 316-5995
        </a>
      </div>
    </header>
  )
}
