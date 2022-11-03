export const styles = {
    activeLink: ({ isActive }) => (isActive ? 'text-lime-300' : 'white'),
    container: 'flex flex-col gap-4 justify-center mx-auto md:w-80',
    button: 'px-8 py-2 bg-lime-400 text-zinc-900 font-medium uppercase rounded-md hover:text-white hover:bg-lime-400',
    title: 'font-bold text-xl text-center',
    flexRow: 'flex gap-4',
    flexCol: 'flex flex-col gap-4',
    formInput: 'mt-1 block w-full rounded-md bg-gray-100 text-zinc-900 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
} 