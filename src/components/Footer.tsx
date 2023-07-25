import { RectangleHorizontal, Heart, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList,Laptop2, Volume, Maximize2} from 'lucide-react'
import Image from 'next/image'

export function Footer() {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
          <div className='flex items-center gap-3'>
            <Image src="/Ma.png" width={56} height={56} alt="Te amo Ma"/>
            <div className='flex flex-col'>
              <strong className='font-normal hover:underline'>Te amo Ma</strong>
              <span className='text-xs text-zinc-400 hover:underline'>David Lucas</span>
            </div>
            <div className='flex items-center gap-2'>
                <Heart size={20} className='text-zinc-100/80 hover:text-white-100/100 hover:scale-105 hover:ease-in-out duration-150'/>
                <RectangleHorizontal size={20} className='text-zinc-100/80 hover:text-zinc-100/100' />
            </div>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center gap-6'>
              <Shuffle size={20} className='text-zinc-200/60 hover:text-zinc-200/100' />
              <SkipBack size={20} className='text-zinc-200/60 hover:text-zinc-200/100' />
              <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black hover:scale-105 hover:ease-in-out duration-150'>
                <img src="/play.png" width={16} height={16} alt="Play"/>
              </button>
              <SkipForward size={20} className='text-zinc-200/60 hover:text-zinc-200/100' />
              <Repeat size={20} className='text-zinc-200/60 hover:text-zinc-200/100' />
            </div>
            <div className='flex items-center gap-2'>
                <span className='text-xs text-zinc-400'>0:31</span>
                <div className='h-1 rounded-full w-96 bg-zinc-600'>
                  <div className='bg-zinc-200 w-24 h-1 rounded-full hover:bg-green-600'></div>
                </div>
                <span className='text-xs text-zinc-400'>2:14</span>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <Mic2 size={20} />
            <LayoutList size={20} />
            <Laptop2 size={20} />
            <div className='flex items-center gap-.5'>
              <Volume size={20} />
              <div className='pai h-1 rounded-full w-24 bg-zinc-600'>
                <div className='bg-zinc-200 w-10 h-1 rounded-full hover:bg-green-600'></div>
              </div>
            </div>
          </div>
        </footer>
    )
}