const react = require("react");
function Footer() {
  const CrntYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copywrite @{CrntYear}</p>
    </footer>
  );
}
export default Footer;
