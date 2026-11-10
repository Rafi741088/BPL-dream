import logo from '../../../assets/logo.png';
import coin from '../../../assets/coin.png';
export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">
                    <img src={logo} alt="logo" className='h-11 w-auto
' />
                </a>
            </div>
            <div className="flex-none">
                <button className="btn justify-center flex gap-2">
                    0 coin
                    <img src={coin} alt="Coin" className="inline-block h-5 w-5" />
                </button>
            </div>
        </div>
    );
}