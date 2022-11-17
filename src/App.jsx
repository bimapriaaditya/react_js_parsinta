import Button from './components/Buttons/Button';
import Card from './components/Cards/Card';

export default function App() {
  return (
    <div className={'bg-slate-100 min-h-screen flex justify-center items-center'}>
      <div className={'flex gap-x-2 max-w-xl w-full'}>
        <Card>
          <Card.Header>Lorem Ipsum</Card.Header>
          <Card.Body>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet natus consequatur deserunt ducimus deleniti
              officiis aliquam accusantium illum excepturi ex tempora maxime, est rerum vitae? Placeat harum quam
              consequuntur reprehenderit?
            </p>
          </Card.Body>
          <Card.Footer>
            <Button>Login</Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}
