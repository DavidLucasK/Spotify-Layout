
export function BottomAlbums() {
    return (
      <div className='grid grid-cols-8 gap-4 mt-4'>
        <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO0nT692" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
          <img src="/album1.png" className='w-full' width={120} height={120} alt="Capa"/>
          <strong className='font-semibold'>This Is Red Hot Chilli Peppers</strong>
          <span className='text-xs text-zinc-400'>Red Hot Chilli Peppers</span>
        </a>
        <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4kqwHC" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
          <img src="/album8.png" className='w-full' width={120} height={120} alt="Capa"/>
          <strong className='font-semibold'>This is Foo Fighters</strong>
          <span className='text-xs text-zinc-400'>Foo Fighters</span>
        </a>
        <a href="https://open.spotify.com/playlist/37i9dQZF1DXaQm3ZVg9Z2X" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
          <img src="/album7.png" className='w-full' width={120} height={120} alt="Capa"/>
          <strong className='font-semibold'>This Is Coldplay</strong>
          <span className='text-xs text-zinc-400'>Coldplay</span>
        </a>
        <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO43TWtq" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
          <img src="/album3.png" className='w-full' width={120} height={120} alt="Capa"/>
          <strong className='font-semibold'>This Is Switchfoot</strong>
          <span className='text-xs text-zinc-400'>Switchfoot</span>
        </a>
        <a href="https://vocemeama.vercel.app/" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
          <img src="/Marcela.png" className='w-full' width={120} height={120} alt="Capa"/>
          <strong className='font-semibold'>This Is Te Amo</strong>
          <span className='text-xs text-zinc-400'>David Lucas</span>
        </a>
      </div>
    )
}