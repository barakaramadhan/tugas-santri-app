import { Link } from 'react-router';

function SantriCard({ id, name, classroom }) {
  const initial = name?.charAt(0).toUpperCase();

  return (
    <Link
      to={`/admin/santri/list/${id}`}
      className='group flex items-center gap-3 rounded-lg border border-stone-200 bg-white p-3 transition-colors hover:border-emerald-700 hover:bg-emerald-50/40'
    >
      <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-emerald-800 text-sm font-semibold text-emerald-50'>
        {initial}
      </span>
      <span className='flex min-w-0 flex-col'>
        <span className='truncate text-sm font-medium text-stone-900'>
          {name}
        </span>
        <span className='text-xs text-stone-500'>Kelas {classroom}</span>
      </span>
    </Link>
  );
}

export default SantriCard;