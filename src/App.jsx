import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ReactBio from './pages/ReactBio';
import Home from './pages/Home';

export default function App() {
  return (
    <div className={'bg-slate-100 min-h-screen flex justify-center items-center'}>
      <div className={'max-w-2xl w-full'}>
        <BrowserRouter>
          <nav className='flex fixed top-0 left-0 w-full bg-white border border-b-slate-200 shadow-sm'>
            <Link className='p-3 block' to='/home'>
              Home
            </Link>
            <Link className='p-3 block' to='/bio'>
              About
            </Link>
          </nav>
          <Routes>
            <Route path='/home' exact element={<Home />} />
            <Route path='/bio' element={<ReactBio />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
