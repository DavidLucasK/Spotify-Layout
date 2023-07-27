import { Heart, ChevronLeft, ChevronRight, Play} from 'lucide-react'
import { TopAlbums } from '../pages/components/Top-Albums'
import { BottomAlbums } from '../pages/components/Bottom-Albums'
import Link from 'next/link'

export function Main() {
    return (
      <main className="flex-1 p-6">

      {/* Botões de Back e Next */}
      <div className="flex items-center gap-4">
        <Link href="https://google.com.br">
          <a>
            <button className='rounded-full bg-green/30 hover:bg-black/60 p-1'>
              <ChevronLeft/>
            </button>
          </a>
        </Link>
        <button className='rounded-full bg-green/30 hover:bg-black/60 p-1'>
          <ChevronRight/>
        </button>
        <a href="" className='flex items-center gap-12'></a>
      </div>

      {/* Titulo Good Afternoon */}
      <h1 className='font-bold text-3xl mt-10'>Boa tarde</h1>

      {/* Albums na parte superior */}
      <div>
        <TopAlbums />
      </div>

      {/* Titulo Made for You */}
      <h2 className='font-semibold text-2xl mt-10'>Made for You</h2>

      {/* Albums na parte Inferior */}
      <div>
        <BottomAlbums />
      </div>

    </main>
    )
}