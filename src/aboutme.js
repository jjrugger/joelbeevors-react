import './tailwind.css';

function AboutMe() {
  return (
    <div className="flex flex-col xl:flex-row xl:relative">
      <div className="flex flex-col md:items-center gap-10 w-full xl:w-1/2 px-6 lg:px-12 py-14 md:text-center">
        <h2 className='text-goth-orange font-canterbury text-[58px] lg:text-title border-b border-goth-orange inline-block max-w-max'>
         A bit about me
        </h2>
        <p className='text-goth-orange font-caudex text-[28px] lg:text-body'>I am a front end web developer based out of Edinburgh. I aim to bring technology and alternative culture together in a way that enables them to serve each other, allowing both to reach their full potential.</p>
        <p className='text-goth-orange font-caudex text-[28px] lg:text-body'>Please join me in this venture.</p>
      </div>
      <div className="w-full max-h-80 xl:w-1/2 xl:h-full xl:max-h-full relative xl:absolute xl:right-0">
       <picture className="xl:w-full h-full xl:max-h-full  max-h-80">
        <img src="/media/tree-skull.jpg" alt="Tree Skull" className="w-full xl:h-full xl:max-h-full object-cover max-h-80" />
      </picture>
      </div>
    </div>
  );
}

export default AboutMe;
