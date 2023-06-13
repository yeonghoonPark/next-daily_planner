type Props = { children: React.ReactNode };

export default function TodosGrid({ children }: Props) {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-6'>
      {children}
    </div>
  );
}
