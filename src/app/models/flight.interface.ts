export interface IFlight {
    filter(arg0: (item: any) => boolean): any;
    uniqueid: number;
    Flightcode: string;
    DateTime: Date | number;
    OriginDestination: string;
    Registration: string;
    id: string;
}
