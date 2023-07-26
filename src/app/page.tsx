import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import { Heart, ChevronLeft, ChevronRight, Play} from 'lucide-react'

export default function Home() {
  return (
    <main>
      <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6">
            <div className="flex items-center gap-4">
              <button className='rounded-full bg-black/30 hover:bg-black/60 p-1'>
                <ChevronLeft/>
              </button>
              <button className='rounded-full bg-black/30 hover:bg-black/60 p-1'>
                <ChevronRight/>
              </button>
              <a href="" className='flex items-center gap-12'></a>
            </div>

            <h1 className='font-bold text-3xl mt-10'>Boa tarde</h1>

            <div className='grid grid-cols-3 gap-4 mt-4'>
              <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                <img src="/album1.png" width={104} height={104} alt="Capa"/>
                <strong>This Is Red Hot Chilli Peppers</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:bg-green-500 hover:scale-105 hover:ease-in-out duration-150'>
                  <img src="/play.png" width={20} height={20} alt="Play"/>
                </button>
              </a>
              <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                <img src="/Marcela.png" width={104} height={104} alt="Capa"/>
                <strong>This Is Te Amo</strong>
                <button className='w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-black ml-auto mr-8 invisible group-hover:visible hover:bg-red-600 hover:scale-105 hover:ease-in-out duration-150'>
                  <img src="/heart.png" width={24} height={24} alt="Heart"/>
                </button>
              </a>
              <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                <img src="/album3.png" width={104} height={104} alt="Capa"/>
                <strong>This Is Switchfoot</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:bg-green-500 hover:scale-105 hover:ease-in-out duration-150'>
                  <img src="/play.png" width={20} height={20} alt="Play"/>
                </button>
              </a>
              <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                <img src="/album4.png" width={104} height={104} alt="Capa"/>
                <strong>This Is Yago Oproprio</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:bg-green-500 hover:scale-105 hover:ease-in-out duration-150'>
                  <img src="/play.png" width={20} height={20} alt="Play"/>
                </button>
              </a>
              <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                <img src="/album6.png" width={104} height={104} alt="Capa"/>
                <strong>This Is Oficina G3</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:bg-green-500 hover:scale-105 hover:ease-in-out duration-150'>
                  <img src="/play.png" width={20} height={20} alt="Play"/>
                </button>
              </a>
              <a href="#" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                <img src="/album5.png" width={104} height={104} alt="Capa"/>
                <strong>This Is Taylor Swift</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:bg-green-500 hover:scale-105 hover:ease-in-out duration-150'>
                  <img src="/play.png" width={20} height={20} alt="Play"/>
                </button>
              </a>
            </div>

            <h2 className='font-semibold text-2xl mt-10'>Made for Marcela Zaglia Montagner</h2>

            <div className='grid grid-cols-8 gap-4 mt-4'>
              <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <img src="/Marcela.png" className='w-full' width={120} height={120} alt="Capa"/>
                <strong className='font-semibold'>This Is Te Amo</strong>
                <span className='text-xs text-zinc-400'>David Lucas</span>
              </a>
              <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <img src="/album1.png" className='w-full' width={120} height={120} alt="Capa"/>
                <strong className='font-semibold'>This Is Red Hot Chilli Peppers</strong>
                <span className='text-xs text-zinc-400'>Red Hot Chilli Peppers</span>
              </a>
              <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <img src="/album3.png" className='w-full' width={120} height={120} alt="Capa"/>
                <strong className='font-semibold'>This Is Switchfoot</strong>
                <span className='text-xs text-zinc-400'>Switchfoot</span>
              </a>
              <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <img src="/album6.png" className='w-full' width={120} height={120} alt="Capa"/>
                <strong className='font-semibold'>This Is Oficina G3</strong>
                <span className='text-xs text-zinc-400'>Oficina G3</span>
              </a>
              <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
                <img src="/album5.png" className='w-full' width={120} height={120} alt="Capa"/>
                <strong className='font-semibold'>This is Taylor Swift</strong>
                <span className='text-xs text-zinc-400'>Taylor Swift</span>
              </a>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </main>
  )
}
