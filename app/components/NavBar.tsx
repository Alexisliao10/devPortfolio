export default function NavBar({ isOpen }: { isOpen: boolean }) {
  return (
    <ul
      className={`dropdown ${isOpen && "is-open"} absolute -z-10 flex flex-col items-end gap-7 bg-secondaryColor/50 px-6 py-4 text-lg text-titleText sm:relative sm:top-0 sm:flex-row sm:items-center sm:bg-transparent`}
    >
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
  );
}
