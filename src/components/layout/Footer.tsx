import Lock from '../icons/Lock'

export default function Footer() {
  return (
    <footer className='flex items-center justify-center h-[19px] gap-2 mt-3'>
      <Lock />
      <p className='text-[#A6A6A6] font-medium text-[12px] leading-[18.5px] mt-[5px]'>
        All transactions are secure and encrypted
      </p>
    </footer>
  )
}
