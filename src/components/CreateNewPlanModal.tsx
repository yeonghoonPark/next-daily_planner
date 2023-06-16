type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function CreateNewPlanModal({ children, onClose }: Props) {
  return (
    <section
      className='fixed inset-0 flex justify-center items-center bg-neutral-900/30'
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className='flex justify-center items-center w-[336px] h-[176px] bg-white rounded-md border-2 border-slate-300'>
        {children}
      </div>
    </section>
  );
}
