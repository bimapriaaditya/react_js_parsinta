export default function Label({ value, children, ...props }) {
  return (
    <label className='text-slate-600 mb-2 block font-semibold text-lg' {...props}>
      {value || children}
    </label>
  );
}
