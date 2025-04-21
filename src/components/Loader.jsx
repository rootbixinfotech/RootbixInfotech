import { BallTriangle } from "react-loader-spinner";

export const Loader = () => {
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <BallTriangle color='#00BFFF' height={100} width={100} />
        </div>
    )
}
