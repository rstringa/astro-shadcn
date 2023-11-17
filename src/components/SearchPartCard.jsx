import SearchPartCardMenu from './SearchPartCardMenu';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const SearchPartCard = ({ nombre, telefono, direccion }) => { 

    return (
        <>
            <Card className='my-2' >
                <CardHeader className="flex-row justify-between pb-4">
                    <CardTitle>{nombre}</CardTitle>
                    <div> <SearchPartCardMenu /> </div>
                    {/* <CardDescription>{persona.nombre}</CardDescription> */}
                </CardHeader>
                <CardContent>
                    <p>Telefono: {telefono}</p>
                    <p>Dirección: {direccion}</p>
                </CardContent>
                {/* <CardFooter>
              <p>Card Footer</p>
              </CardFooter> */}
            </Card>
        </>
    )
}

export default SearchPartCard



