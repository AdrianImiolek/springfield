export default function Footer() {
  const date = new Date();
  return (
    <footer className="footer bg-main p-3 overflow-hidden">
      <div className="footer__rapperwrapper flex justify-center">
        <p className="footer__text text-body-sm">Strona stworzona przez Adrian Imiołek dla Springfield &copy; {date.getFullYear()}</p>
      </div>
    </footer>
  );
}
