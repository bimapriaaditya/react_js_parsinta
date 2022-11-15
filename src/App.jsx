import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons';

export default function App() {
  return (
    <div className={'bg-slate-600 grid place-content-center min-h-screen'}>
      <div className={'flex gap-x-2'}>
        <Button
          type='button'
          onClick={() => console.log('Facebook has clicked')}
        >
          <IconBrandFacebook />
          Facebook
        </Button>
        <Button
          type='submit'
          onClick={() => console.log('Twitter has clicked')}
        >
          <IconBrandTwitter />
          Twitter
        </Button>
      </div>
    </div>
  );
}
IconBrandTwitter;
function Button(props) {
  const { text, children } = props;
  return (
    <button
      {...props}
      className={
        '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 bg-blue-600 text-white px-4 py-2 rounded flex gap-x-2'
      }
    >
      {text || children}
    </button>
  );
}
