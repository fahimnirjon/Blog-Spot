import profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <div className='flex justify-between mt-5 p-5 border-b-2'>
            <p className='text-4xl font-bold text-blue-300'>Knowledge Cafe</p>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;