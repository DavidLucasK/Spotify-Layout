import { Home as HomeIcon, Search as Search, Library as Library, PlusSquare, Heart, Bookmark,ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList,Laptop2, Volume, Maximize2} from 'lucide-react'

export function Sidebar () {
    return  (
        <aside className="w-72 bg-zinc-950 p-6">
            <nav className='space-y-5'>
              <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-100'>
                <HomeIcon />
                Home
              </a>
              <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-100'>
                <Search />
                Search
              </a>
              <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-100'>
                <Library />
                Your Library
              </a>
            </nav>
          
            <nav className='space-y-5 mt-12'>
              <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-100'>
                <PlusSquare />
                Criar playlist
              </a>
              <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-100'>
                <Heart />
                Músicas Curtidas
              </a>
              <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-100'>
                <Bookmark />
                Seus episódios
              </a>
            </nav>

            <nav className='mt-4 pt-4 border-t border-zinc-800 flex flex-col gap-4'>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Rock 2023</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Pop International 2023</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">MPB</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist Treino</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist Chill</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">stream1</a>
              <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Músicas Nacionais</a>
            </nav>
          </aside>
    )
}