import {MyContext} from "../index";

export default function C() {

    let asd = null;


    return (
        <div>
            Component C content

            <MyContext.Consumer>
                {
                    (qwe) => {
                        asd = qwe
                        console.log(asd.prop1);
                        asd.foo()
                    }
                }
            </MyContext.Consumer>
        </div>
    )
}