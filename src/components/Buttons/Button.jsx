import clsx from 'clsx';

export default function Button(props) {
  const { text, children, type = 'button', className = 'bg-blue-600 text-white' } = props;
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        className,
        '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 px-4 py-2 rounded flex whitespace-nowrap justify-center gap-x-2 items-center'
      )}>
      {text || children}
    </button>
  );
}
