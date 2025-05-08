import {createSignal } from 'solid-js'

export const Counter = () => {
    const [count, setCount] = createSignal(10);

    return (
        <div>
            <h1 class='text-4xl text-white'>Counter</h1>
            <h3 class='text-xl text-white'>Value: {count()}</h3>

            <button class='bg-blue-500 p-2 mr-2 rounded cursor-pointer'
                onClick={() => setCount(prev => ++prev)}>
                +1
            </button>
            <button class='bg-blue-500 p-2 mr-2 rounded cursor-pointer'
                onClick={() => setCount(prev => --prev)}>
                -1
            </button>

        </div>
    )
}