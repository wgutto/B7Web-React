type Props = {
    frase: string
    autor?: string
}
export const Card = ({frase, autor}: Props) => {
    return (
        <div className="rounded-lg p-4 w-80 text-center cursor-pointer bg-red-600 hover:bg-red-500">
            <p className="italic">"{frase}"</p>
            {autor &&
                <p className="text-right underline text-[12px]">{autor}</p>
            }
            {!autor &&
                <p className="text-right underline text-[12px]">Autor desconhecido</p>
            }
        </div>
    )
}