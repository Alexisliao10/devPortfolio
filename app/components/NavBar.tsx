export default function NavBar() {
  return (
    <>
      <ul className="absolute right-0 top-full flex flex-col items-end gap-7 bg-secondaryColor/50 px-6 py-4 text-lg text-titleText md:relative md:top-0 md:flex-row md:items-center md:bg-transparent">
        <li>
          <a href="#">Sobre mí</a>
        </li>
        <li>
          <a href="#">Proyectos</a>
        </li>
        <li>
          <a href="#">Conocimientos</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
    </>
  );
}
