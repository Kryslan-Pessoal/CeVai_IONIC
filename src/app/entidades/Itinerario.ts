import { Local } from "./Local";

export class Itinerarios{
    idItinerario: number;
    itinerarios: Itinerario[];
}

export class Itinerario{
    
    nomeDoItinerario: string;
    /** {@link SentidoDoItinerario} */
    sentido: string;
    /** Quantidade de faculdades que este Itinerário terá */
    qtdFaculdades: number;

    localDeSaida: Local;

    faculdadeDestino1: Local;
    faculdadeDestino2: Local;

    horaDeSaida: string;
    horaDeChegada: string;
}

export class SentidoDoItinerario{
    public static IDA = "ida";
    public static VOLTA = "volta"; 
}