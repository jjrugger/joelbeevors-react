import './tailwind.css';

function Footer() {
  return (
    <div className="relative flex flex-col items-center justify-center px-6 lg:px-12 py-14 text-center bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/media/angel.png')" }}>
      <div className='absolute inset-0 bg-black opacity-80'></div>
      <div className='relative z-1'>
        <h3 className='text-goth-orange tracking-normal font-canterbury text-[58px] xl:text-title leading-none border-goth-orange'>Beyond the warmth of the dying Sun <br/>
        Hear the whispering of the wind</h3>
      </div>
    </div>
  );
}

export default Footer;
