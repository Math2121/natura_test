import Image from 'next/image';
import Close from '../../public/close.svg'
function Notify() {
    return (
        <div className="w-full justify-between flex items-center bg-gray-700 align-middle pb-2 pt-2">
            <span></span>
            <p className='text-sm text-white'>Aproveite as nossas oportunidades!!</p>

            <Image src={Close} alt="close icon" className='w-8 h-5 order-last pr-2 text-white' />
        </div>
    );
}

export default Notify;