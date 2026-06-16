const fruitList = ['apple','banana','cherry']

function MinhaLista(){
    return(
        <ul>
            {fruitList.map(fruit => 
                <li key={fruit}>{fruit}</li>
            )}
        </ul>
    )
}

export default MinhaLista