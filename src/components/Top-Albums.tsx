
export function TopAlbums() {
    return (
      <div className="grid grid-cols-3 gap-4 mt-4">
        <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO0nT692" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <img src="/album1.png" width={104} height={104} alt="Capa"/>
          <strong>This Is Red Hot Chilli Peppers</strong>
          <button className='w-12 h-12 mt-6 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible group-hover:-translate-y-4 hover:bg-green-500 hover:scale-105 hover:ease-in-out duration-[275ms] opacity-5 group-hover:opacity-100'>
            <img src="/play.png" width={20} height={20} alt="Play"/>
          </button>
        </a>
        <a href="https://vocemeama.vercel.app/" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <img src="/Marcela.png" width={104} height={104} alt="Capa"/>
          <strong>This Is Te Amo</strong>
          <button className='w-12 h-12 mt-6 flex items-center justify-center rounded-full bg-red-500 text-black ml-auto mr-8 invisible group-hover:visible group-hover:-translate-y-4 hover:bg-red-600 hover:scale-105 hover:ease-in-out duration-[275ms] opacity-5 group-hover:opacity-100'>
            <img src="/heart.png" width={24} height={24} alt="Heart"/>
          </button>
        </a>
        <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO43TWtq" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <img src="/album3.png" width={104} height={104} alt="Capa"/>
          <strong>This Is Switchfoot</strong>
          <button className='w-12 h-12 mt-6 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible group-hover:-translate-y-4 hover:bg-green-500 hover:scale-105 hover:ease-in-out duration-[275ms] opacity-5 group-hover:opacity-100'>
            <img src="/play.png" width={20} height={20} alt="Play"/>
          </button>
        </a>
        <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4kqwHC" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <img src="/album8.png" width={104} height={104} alt="Capa"/>
          <strong>This Is Foo Fighters</strong>
          <button className='w-12 h-12 mt-6 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible group-hover:-translate-y-4 hover:bg-green-500 hover:scale-105 hover:ease-in-out duration-[275ms] opacity-5 group-hover:opacity-100'>
            <img src="/play.png" width={20} height={20} alt="Play"/>
          </button>
        </a>
        <a href="https://open.spotify.com/playlist/37i9dQZF1DXaQm3ZVg9Z2X" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <img src="/album7.png" width={104} height={104} alt="Capa"/>
          <strong>This Is Coldplay</strong>
          <button className='w-12 h-12 mt-6 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible group-hover:-translate-y-4 hover:bg-green-500 hover:scale-105 hover:ease-in-out duration-[275ms] opacity-5 group-hover:opacity-100'>
            <img src="/play.png" width={20} height={20} alt="Play"/>
          </button>
        </a>
        <a href="https://open.spotify.com/playlist/37i9dQZF1DX5KpP2LN299J" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
          <img src="/album5.png" width={104} height={104} alt="Capa"/>
          <strong>This Is Taylor Swift</strong>
          <button className='w-12 h-12 mt-6 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible group-hover:-translate-y-4 hover:bg-green-500 hover:scale-105 hover:ease-in-out duration-[275ms] opacity-5 group-hover:opacity-100'>
            <img src="/play.png" width={20} height={20} alt="Play"/>
          </button>
        </a>
      </div>
    )
}