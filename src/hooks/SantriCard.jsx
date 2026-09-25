import SantriCard from '@/components/SantriCard';

function SantriList() {
  const santries = [
    {
      id: 1,
      name: 'Ahmad Fauzi',
      classroom: '3A',
    },
    {
      id: 2,
      name: 'Siti Aisyah',
      classroom: '3B',
    },
    {
      id: 3,
      name: 'Rizki Ramadan',
      classroom: '3C',
    },
  ];

  return (
    <>
      <header className='flex flex-col gap-1'>
        <h1 className='text-md font-semibold'>Daftar Santri</h1>
        <p className='text-[10px]'>
          Klik pada kartu santri untuk melihat detail.
        </p>
      </header>

      <div className='flex flex-col gap-3 mt-5'>
        {santries.map((santri) => {
          return (
            <SantriCard
              key={santri.id}
              id={santri.id}
              name={santri.name}
              classroom={santri.classroom}
            />
          );
        })}
      </div>
    </>
  );
}

export default SantriList;


