export interface IFlight {
    filter(arg0: (item: any) => boolean): any;
    Flightcode: string;
    DateTime: Date;
    OriginDestination: string;
    Registration: string;
    id: string;
}
