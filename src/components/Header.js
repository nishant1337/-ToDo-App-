
 import Button from "./Button";
const Header = ({title}) => {

    const onClick=()=>{
        console.log("Clicked")
    }
  return (
    <div>
        <header className="header">
            <h1>Morning {title} </h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>


    </div>
  )
}
Header.defaultProps = {
    title: "Default title"
}
export default Header