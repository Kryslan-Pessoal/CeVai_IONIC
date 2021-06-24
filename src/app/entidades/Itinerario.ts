import { Local } from "./Local";

export class Itinerario{
    nomeDoItinerario: string;
    /** {@link SentidoDoItinerario} */
    sentido: string;

    parada1: Local;
    parada2: Local;
    parada3: Local;
    parada4: Local;
    parada5: Local;

    faculdadeDestino: Local;

    horaDeSaida: string;
}

export class SentidoDoItinerario{
    public static IDA = "ida";
    public static VOLTA = "volta"; 
}