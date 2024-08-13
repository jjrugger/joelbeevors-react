import './tailwind.css';

function InfoBanner() {
  return (
    <div className="relative flex flex-col items-center justify-center px-6 pt-14 lg:py-14 lg:p-14 md:text-center">
      <div className="flex flex-col md:items-center gap-10   pb-14">
        <h2 className='text-goth-orange font-canterbury text-[58px] lg:text-title border-b border-goth-orange max-w-max'>What I've been working on</h2>
        <p className='text-goth-orange font-caudex text-[28px] lg:text-body'>Working in an agency has enabled me to work on a wide varity of projects for a wide range of clients. <br/> Some of my projects include:</p>
      </div>
      <div className='flex flex-col xl:flex-row gap-10'>
      <a
        href="https://www.balmoralexecutivetravel.com/"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-center text-goth-orange font-canterbury text-[28px] lg:text-body border border-goth-orange py-2 px-5 min-w-96 xl:my-12 hover:bg-goth-orange hover:text-dark-gray transition duration-300">
        Balmoral executive travel
      </a>
      <a
        href="https://www.rhspt.org/"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-center text-goth-orange font-canterbury text-[28px] lg:text-body border border-goth-orange py-2 px-5 min-w-96 xl:my-12 hover:bg-goth-orange hover:text-dark-gray transition duration-300">
        Royal high school preservation trust
      </a>
      <a
        href="https://www.instagram.com/joel_joelerson/"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-center text-goth-orange font-canterbury text-[28px] lg:text-body border border-goth-orange py-2 px-5 min-w-96 xl:my-12 hover:bg-goth-orange hover:text-dark-gray transition duration-300">
        Home Energy Scotland
      </a>
      </div>
      {/* <p className='text-goth-orange font-caudex text-[28px] lg:text-body pt-14'>If you're wanting to know more then contact me directly</p> */}
    </div> 
  );
}

export default InfoBanner;
