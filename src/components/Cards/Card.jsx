function Card({ children }) {
  return <div className='bg-white rounded-md border overflow-hidden shadow-sm'>{children}</div>;
}

function Header({ children }) {
  return (
    <div className='w-full border-b p-4'>
      <h4 className='text-xl'>{children}</h4>
    </div>
  );
}

function Footer({ children }) {
  return <div className='bg-slate-50 p-4'>{children}</div>;
}

function Body({ children }) {
  return <div className='p-4 leading-relaxed'>{children}</div>;
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
