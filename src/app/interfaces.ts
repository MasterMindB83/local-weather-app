export interface ICurrentWeather {
    city: string;
    country: string;
    date: Date;
    image: string;
    temperature:number;
    description: string;
}
export interface ICity{
    name: string;
    country:string;
    population: number;
    coord: ICoord;

}
export interface IDaysForecast{
    city:ICity;
    list: IDayForecast[];
}
export interface IDayForecast{
    dt: number;
    sunrise: number,
    sunset: number;
    datum: Date;
    temp: ITemp;
    feels_like:IFeelsLike;
    pressure: number;
    humidity: number;
    weather:IWeather[];
    speed: number;
    deg: number;
    gust:number;
    clouds: number;
    pop: number;
}
export interface ITemp{
    day :number;
    min:number;
    max:number;
    night:number;
    eve: number;
    morn:number;

}
export interface IFeelsLike{
    day: number;
    night: number;
    eve:number;
    morn: number;
}
export interface IWeather{
    main: string;
    description: string;
    icon: string;
}
export interface ICoord{
    lon:number;
    lat:number;
}