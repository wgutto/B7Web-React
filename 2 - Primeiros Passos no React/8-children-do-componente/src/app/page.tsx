import { Card } from "@/components/Card"

const Page = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-2">
      <h1 className="text-2xl font-bold">Children do Componente</h1>
      <Card>
        <p className="italic">"Este é o conteúdo do Card"</p>
        <p className="text-right underline text-[12px]">Autor desconhecido</p>
      </Card>
    </div>
  )
}

export default Page