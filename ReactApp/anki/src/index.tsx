import React from 'react';
import ReactDOM from 'react-dom';

function Wrapper() {
    const [szok, setSzok] = React.useState(0);
    const [shouldDisplay, setShouldDisplay] = React.useState(true);

    return (
        <div>
            {szok}
            {shouldDisplay && <Lol xyz={szok}/>}
            <button onClick={() => setSzok((prev) => prev + 1)}>set szok</button>
            <button onClick={() => setShouldDisplay((prev) => !prev)}>toggle</button>
        </div>
    )
}

function Lol({xyz}: any) {
    const [lol, setLol] = React.useState(10);

    React.useEffect(() => {
        console.log(xyz);

        const x = document.getElementById('hehe');

        console.log('xxxx', x);

        return () => {
            const x = document.getElementById('hehe');
            console.log("x should not exist", x);
            console.log("leaving now!")
        }
    }, [xyz]);


    return (
        <div id="hehe">szok
            {lol}
            <button onMouseEnter={() => setLol((prev) => prev +1)}>Add</button>
        </div>
    )


}

ReactDOM.render(
    <Wrapper/>,
    document.getElementById('root')
);

