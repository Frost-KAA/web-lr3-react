import Link from "next/link";

const Layout = (props) => {

  let menu;

  if (!props.auth) {
      menu = (
        <div className="form">
            <p>You are not authorized</p>
             <Link href="/login">
                <button className="form-btn">Login</button>
            </Link>
        </div>
       
      )
  } else {
      menu = (
        <div className="form">
        <p>Hello, authorized user</p>
    </div>
      )
  }

  return (
      <>
        {menu}
      </>
  );
};

export default Layout;
