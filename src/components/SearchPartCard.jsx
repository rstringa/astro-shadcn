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
            <Card className='my-4' >
                <CardHeader className="flex-row justify-between pb-2">
                    <CardTitle className='text-slate-600'>{nombre}</CardTitle>
                    <div> <SearchPartCardMenu /> </div>
                    {/* <CardDescription>{persona.nombre}</CardDescription> */}
                </CardHeader>
                <CardContent>
                    <p><b>Telefono:</b> {telefono}</p>
                    <p><b>Dirección:</b> {direccion}</p>
                </CardContent>
                {/* <CardFooter>
              <p>Card Footer</p>
              </CardFooter> */}
            </Card>
        </>
    )
}

export default SearchPartCard



