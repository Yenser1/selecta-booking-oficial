function AcercaDeNosotros() {
    return (
        <section className="w-full flex flex-col items-center">
            <div
                className=" bg-amber-400 px-4 flex justify-center rounded-t-2xl"
                style={{
                    width: "clamp(350px, 50vw, 1000px)",
                }}
            >
                <h1 className="heading">Acerca de Nosotros</h1>
            </div>
            <div
                className="px-4 flex flex-wrap justify-center border-r-2 border-l-2 border-amber-400 p-3 gap-3"
                style={{
                    width: "clamp(350px, 50vw, 1000px)",
                    height: "clamp(500px, 50vh, 1000px)",
                }}
            >
                <div className="w-3/7  bg-amber-200"></div>
                <div className="w-3/7  bg-amber-300">valora</div>
            </div>
        </section>
    );
}
export default AcercaDeNosotros;
