import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from '@tabler/icons';
import clsx from 'clsx';

export default function App() {
  return (
    <div className={'bg-slate-600 grid place-content-center min-h-screen'}>
      <div className={'flex gap-x-2'}>
        <Button type='button' onClick={() => console.log('Facebook has clicked')}>
          <IconBrandFacebook />
          Facebook
        </Button>
        <Button type='submit' className={'bg-sky-600 text-white'} onClick={() => console.log('Twitter has clicked')}>
          <IconBrandTwitter />
          Twitter
        </Button>
        <Button onClick={() => console.log('Github has clicked')} className={'bg-black text-white'}>
          <IconBrandGithub />
          Twitter
        </Button>
      </div>
    </div>
  );
}
IconBrandTwitter;
function Button(props) {
  const { text, children, type = 'button', className = 'bg-blue-600 text-white' } = props;
  return (
    <button {...props} type={type} className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 px-4 py-2 rounded flex gap-x-2')}>
      {text || children}
    </button>
  );
}
