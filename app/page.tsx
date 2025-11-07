export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
            <main
                className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white  sm:items-start">
                <h1 className={"text-4xl font-extrabold sm:text-5xl md:text-6xl dark:text-gray-700 text-gray-100"}>Super
                    Cool Website built by <span><a
                        href="https://github.com/gitaoh"
                        className={"text-blue-500 hover:text-blue-500 hover:underline dark:text-blue-700"}>@gitaoh</a></span>
                </h1>
            </main>
        </div>
    );
}
