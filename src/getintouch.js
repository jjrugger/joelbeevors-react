import './tailwind.css';

function GetInTouch() {
  return (
    <div className="flex justify-center border-b-2 border-goth-orange ">
      <div className="flex flex-col md:items-center justify-center gap-10 px-6 lg:px-12 py-14 md:text-center bg-no-repeat max-w-full  bg-bottom 2xl:bg-left bg-contain" style={{ backgroundImage: "url('/media/baphomet.png')" }}>
        <h2 className='text-goth-orange font-canterbury text-[58px] lg:text-title border-b border-goth-orange max-w-max'>
         Get in touch
        </h2>
        <p className='text-goth-orange font-caudex text-[28px] lg:text-body'>If you would like to speak about a potential project you have in mind. Or would just like to speak to me in general, then please follow one of my social links to get connected.</p>
        <p className='text-goth-orange font-caudex text-[28px] lg:text-body'>Or you can contact me from the email address below</p>
      
      <div className='inline-flex justify-center'>
        <a
        href="https://www.instagram.com/joel_joelerson/"
        
        rel="noopener noreferrer"
        className="text-goth-orange font-canterbury text-[28px] lg:text-body border border-goth-orange py-2 px-5 min-w-96 my-12 hover:bg-goth-orange hover:text-dark-gray transition duration-300  max-w-max text-center">
        Email me
      </a>
      </div>
      </div>
    
    </div>
  );
}

export default GetInTouch;
