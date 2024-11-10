"use client"
import { MapPin, Phone, Clock, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import dynamic from "next/dynamic"

const NoSSR = dynamic(() => import('@/components/ui/iframeMap').then(mod => mod.default), {
  loading: () => <p>Loading...</p>,
})

export default function ContactScreen() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">Contacto</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Celular / Teléfono
            </h2>
            <p className="text-lg mb-2">Atención: (+591) 785 57 477</p>
            {/* <p className="text-lg mb-2">Support: (555) 987-6543</p> */}
            <p className="text-sm text-muted-foreground">
              Disponible de Lunes a Viernes, 9 AM - 5 PM
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              Dirección
            </h2>
            <p className="text-lg mb-2">Carretera a Porongo, entrada al Vivero previa al puente de Urubo Santa Cruz de la Sierra</p>
            <p className="text-lg">Bolivia</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Horarios de atención
            </h2>
            <p className="text-lg mb-2">Lunes - Viernes: 9 AM - 5 PM</p>
            <p className="text-lg mb-2">Sábados: 10 AM - 2 PM</p>
            <p className="text-lg">Domingos: <Badge className="bg-red-500 text-white">Cerrado</Badge></p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Globe className="mr-2 h-5 w-5" />
              Redes Sociales
            </h2>
            <p className="text-lg mb-2">Web: <Link href={'https://www.facebook.com/funsepa/?locale=es_LA'}><Badge className="bg-purple-500 text-white font-semibold">fundacion-sepa.org</Badge></Link> </p>
            <p className="text-lg mb-2">Facebook: <Link href={'https://www.facebook.com/funsepa/?locale=es_LA'}><Badge className="bg-blue-500 text-white font-semibold">funsepa</Badge></Link></p>
            <p className="text-lg">YouTube <Link href={'https://www.youtube.com/@bienalinfantojuvenil'}><Badge className="bg-red-700 text-white font-semibold">@bienalinfantojuvenil</Badge></Link></p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Visit Us</h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <NoSSR />
          {/* <Iframe title={"google-maps"} src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7516.621646348034!2d-63.20896848315956!3d-17.75349465489664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1dd6109a87407%3A0xf95fab7a26ebde51!2sFundaci%C3%B3n%20SEPA!5e0!3m2!1ses-419!2sbo!4v1729440123463!5m2!1ses-419!2sbo"} width={"100%"} height={"100%"}  /> */}
        </div>
      </div>
    </div>
  )
}