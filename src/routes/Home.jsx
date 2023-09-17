
import Directory from '../dicorectory';
import { Outlet } from 'react-router-dom';
const categrories = [
    {
        id: 1,
        title: 'Hats',
        imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTwrrFAZD5ZcpyOCiqQKLcDytrs71U8AgJmWkd4xTDQy2Oye3zSWqVDRn7qzs0xHWZ0LqVD70exdoqMPUFMsT0XNeLJXASLpSZ147lQdq4&usqp=CAE'
    },
    {
        id: 2,
        title: 'Jackets',
        imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSdPSu7u8Am1g5Zvyy0ePlZe8M1ORVcJL3AxkbdfoUBBWix5mUnl4g92eAcdJI_MiqL4CboqDrDaFnE46qdEnANcf18fif3CSR9zLRHeGGQZrf1AY70_4y-&usqp=CAE'
    },
    {
        id: 3,
        title: 'Sneakers',
        imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSB9cNwhqERV9EONFaBDW-6AMxFYoW8jMQfC0boa777UD_aGidEEllWX7yO7ZGEScMQJSR_uIQe1Z-PztqqsrYlPDCI4qvrNFlp2kAQhbM&usqp=CAE'
    },
    {
        id: 4,
        title: 'Women',
        imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRxo2tgVcUx8FrEl-1tpWdI9mURoo6Ci02tE3CdOtWybCBSBZfZkr1iYNV-anz6uXGf45yIWpHnhns2V12yoz_pW5tf-crr43KWjgVC-0l7&usqp=CAE'
    },
    {
        id: 5,
        title: 'Mens',
        imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRw4oWokb1RaNTFNoN99yulVlk93wjqFnEohbusjXPLQhwMW-rKMzKh6shM4rr0BorX7skdCGHor5COx1EKN5dGoCS8R8YL&usqp=CAY'
    },

]
const Home = () => {
    return (
        <div>
            <Directory categrories={categrories} />
            <Outlet/>

        </div>
    );
}

export default Home;
