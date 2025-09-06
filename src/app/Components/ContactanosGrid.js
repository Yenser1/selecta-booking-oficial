function ContactUsGrid() {
    return (
        <section>
            <h1 className="h1">Contactanos!</h1>
            <div className="flex flex-wrap">
                <div className="flex justify-center items-center bg-[#333] min-w-32 w-[30vw] max-w-lg h-60 rounded-3xl hover:scale-110 transition-all duration-150">
                    <p>Email</p>
                </div>
                <div>Direccion</div>
                <div>Telefono</div>
            </div>
        </section>
    );
}

export default ContactUsGrid;
