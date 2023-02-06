import clsx from 'clsx';

export default function Input(props) {
  const { type = 'text', className = 'bg-white text-black focus:border-sky-300' } = props;
  return (
    <input
      {...props}
      type={type}
      className={clsx(className, 'px-4 py-2 border border-slate-300 outline-none focus:shadow-sm w-full')}
    />
  );
}
